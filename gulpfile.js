const gulp = require('gulp'),
    shell = require('gulp-shell'),
    runSequence = require('gulp4-run-sequence'),
    spawn = require('child_process').spawnSync,
    argv = require('yargs').argv,
    fs = require('fs'),
    config = {};

/**
 * Generate our git tag
 * This is used when deploying to AWS
 */
const gitTag = spawn('git', ['describe', '--tags', '--exact-match']);
config.gitRef = (
    gitTag.status === 0
        ? gitTag.stdout
        : spawn('git', ['rev-parse', 'HEAD']).stdout
)
    .toString('utf8')
    .replace(/\s/, '');

/**
 * Task: Generate Dockerrun file for AWS deployment
 */
gulp.task('docker:generateDockerrun', function (callback) {
    fs.writeFile(
        'Dockerrun.aws.json',
        JSON.stringify(
            {
                AWSEBDockerrunVersion: '1',
                Image: {
                    Name:
                        '982523169217.dkr.ecr.us-east-2.amazonaws.com/dynastyv2:' +
                        config.gitRef,
                    Update: 'true',
                },
                Ports: [
                    {
                        ContainerPort: '8080',
                    },
                ],
            },
            undefined,
            2
        ),
        callback
    );
});

/**
 * Tasks: Shell commands
 * Shell commands for various docker uses and ECR login
 */
gulp.task(
    'shell:docker:build',
    shell.task(
        'docker build --tag 982523169217.dkr.ecr.us-east-2.amazonaws.com/dynastyv2:latest ./'
    )
);

gulp.task(
    'shell:docker:tag',
    shell.task(
        'docker tag 982523169217.dkr.ecr.us-east-2.amazonaws.com/dynastyv2:latest 982523169217.dkr.ecr.us-east-2.amazonaws.com/dynastyv2:' +
            config.gitRef
    )
);

gulp.task(
    'shell:docker:ecrLogin',
    shell.task('docker login --username evan@evangjerde.com --password Lpuc1885cqdy.')
);

gulp.task(
    'shell:docker:push',
    shell.task(
        'docker push 982523169217.dkr.ecr.us-east-2.amazonaws.com/dynastyv2:latest && docker push 982523169217.dkr.ecr.us-east-2.amazonaws.com/dynastyv2:' +
            config.gitRef
    )
);

gulp.task(
    'shell:docker:deploy',
    shell.task('./eb-deploy.bash live ' + config.gitRef)
);

/**
 * Deploy docker to AWS
 */
gulp.task('deploy', function (callback) {
    runSequence(
        'shell:docker:build',
        // 'shell:docker:ecrLogin',
        'shell:docker:tag',
        'shell:docker:push',
        'docker:generateDockerrun',
        'shell:docker:deploy',
        callback
    );
});
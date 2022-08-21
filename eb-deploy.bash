#!/usr/bin/env bash

appName="dynasty-app"
envBaseName="dynasty-app"
envPattern="test|live"
fileList=( 'Dockerrun.aws.json' '.ebextensions/*' )

set -e

# Run in script dir
cd "$( dirname "${BASH_SOURCE[0]}" )"

which aws >/dev/null ||
    (echo "aws cli not found. aborting..." &&
    exit 1)

if [[ -z $1 ]]; then
    $1 = "live"
fi

if [[ $1 == zip ]]; then
    zipOnly=1
fi

if [[ -z $zipOnly ]] && [[ -z $2 ]]; then
    echo "No version provided. aborting..." &&
    exit 1
fi

localEnv="${envBaseName}-${1}"
# shellcheck disable=SC2086,SC2002
distLabel="${2}-$(cat ${fileList[*]} | shasum | perl -ne 'print $1 if /^([^\s]+).+/')"
s3Bucket="elasticbeanstalk-us-east-2-982523169217"
s3Key="${appName}/${distLabel}.zip"

[[ -f ${appName}.zip ]] && rm "${appName}.zip"

if [[ -n $zipOnly ]]; then
    echo "Creating application distribution zip only"
    # shellcheck disable=SC2086
    zip "${appName}.zip" ${fileList[*]}
    exit 0
fi

echo "Deploying $localEnv to elastic beanstalk"
# shellcheck disable=SC2086
aws elasticbeanstalk describe-application-versions --application-name "$appName" \
    | grep -q "$distLabel" \
    || (zip "${appName}.zip" ${fileList[*]} \
    && aws s3 cp "${appName}.zip" "s3://${s3Bucket}/${s3Key}" \
    && aws elasticbeanstalk create-application-version \
        --application-name "$appName" \
        --version-label "$distLabel" \
        --source-bundle "S3Bucket=${s3Bucket},S3Key=${s3Key}")
aws elasticbeanstalk update-environment \
    --environment-name "$localEnv" \
    --version-label "$distLabel"

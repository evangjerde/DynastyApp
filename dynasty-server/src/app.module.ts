import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../dist/dynasty-app'),
    }),
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

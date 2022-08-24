import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('activity')
  getActivityFeed() {
    return this.appService.getActivity();
  }

  @Get('newsFeed')
  getNewsFeed() {
    return this.appService.getNewsFeed();
  }

  @Get('standings')
  getStandings() {
    return this.appService.getStandings();
  }
}

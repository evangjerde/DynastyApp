import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  private ffBaseUrl = 'https://www.fleaflicker.com/api';
  private espnBaseUrl = 'https://www.espn.com/espn'

  constructor(private httpService: HttpService) { }

  getHello(): string {
    return 'Hello World!';
  }

  getActivity(): any {
    return this.httpService.get(`${this.ffBaseUrl}/FetchLeagueActivity?sport=NFL&league_id=309764`).pipe(
      map((axiosResponse: AxiosResponse<any>) => {
        return axiosResponse.data;
      })
    );
  }

  getNewsFeed(): any {
    return this.httpService.get(`${this.espnBaseUrl}/rss/nfl/news`).pipe(
      map((axiosResponse: AxiosResponse<any>) => {
        return axiosResponse.data;
      })
    );
  }
}

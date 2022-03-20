import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  private ffBaseUrl = 'https://www.fleaflicker.com/api';

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
}

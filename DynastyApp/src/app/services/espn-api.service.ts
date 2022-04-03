import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspnApiService {
  private readonly apiUrl = 'https://site.api.espn.com/apis/site/v3/sports/football/nfl';

  constructor(private http: HttpClient) { }

  getLeagueLeaders(season: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/leaders?season=${season}`);
  }
}

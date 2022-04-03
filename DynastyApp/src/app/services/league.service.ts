import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {
    this.getActivityFeed();
  }

  getActivityFeed(): Observable<any> {
    return this.http.get(`${this.baseUrl}/activity`);
  }
}

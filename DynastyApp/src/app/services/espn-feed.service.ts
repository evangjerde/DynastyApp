import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspnFeedService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  getNewsFeed(): Observable<any> {
    return this.http.get(`${this.baseUrl}/newsFeed`, { responseType: 'text' });
  }
}

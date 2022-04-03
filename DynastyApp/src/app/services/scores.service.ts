import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor() {
    this.getScores();
  }

  getScores() {
    fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32')
      .then(response => {
        let respBody = response.json();
        console.log(respBody);
      })
  }
}

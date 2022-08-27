import { Component, Input, OnInit } from '@angular/core';
import { Matchup } from '../../../models/league-scoreboard.model';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.css']
})
export class MatchupComponent implements OnInit {

  @Input() matchup: Matchup;

  constructor() { }

  ngOnInit(): void {
    console.log(this.matchup);
  }

  getFormattedScores(team: 'home' | 'away'): string {
    const teamKey = `${team}Score`;
    return `points: ${this.matchup[teamKey].score.formatted} <br />proj: ${this.matchup[teamKey].projected.formatted}<br />yet to play: ${this.matchup[teamKey].yetToPlay}`;
  }

}

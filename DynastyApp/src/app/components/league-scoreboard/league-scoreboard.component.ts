import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';
import { FleaflickerScoreboard, Matchup } from './league-scoreboard.model';

@Component({
  selector: 'app-league-scoreboard',
  templateUrl: './league-scoreboard.component.html',
  styleUrls: ['./league-scoreboard.component.css']
})
export class LeagueScoreboardComponent implements OnInit {

  scores: FleaflickerScoreboard;

  games: Matchup[];

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getLeagueScoreboard().subscribe(scoreboard => {
      this.scores = scoreboard;

      this.games = this.scores.games;
    })
  }

  isDivisionalMatchup(isDivisional: boolean) {
    return isDivisional ? 'divisional-matchup' : 'non-divisional-matchup';
  }

}

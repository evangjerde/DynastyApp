import { Component } from '@angular/core';
import { LeagueService } from './services/league.service';
import { ScoresService } from './services/scores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynastyApp';

  constructor(private scoreService: ScoresService, private leagueService: LeagueService) {

  }

}

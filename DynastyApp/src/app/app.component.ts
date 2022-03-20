import { Component } from '@angular/core';
import { LeagueService } from './league.service';
import { ScoresService } from './scores.service';

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

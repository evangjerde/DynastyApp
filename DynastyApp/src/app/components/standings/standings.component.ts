import { Component, OnInit } from '@angular/core';
import { FleaflickerStandings } from 'src/app/models/fleaflicker.model';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  standings: FleaflickerStandings;

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getStandings().subscribe(result => {
      this.standings = result;
    });
  }

  isLastTeam(teams: number, index: number) {
    return teams - 1 === index ? 'last-team' : '';
  }


}

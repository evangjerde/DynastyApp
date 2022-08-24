import { Component, OnInit } from '@angular/core';
import { FleaflickerStandings } from 'src/app/owners/owners.model';
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
      console.log(this.standings);
    });
  }


}

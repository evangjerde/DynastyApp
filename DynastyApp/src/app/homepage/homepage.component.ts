import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  activities: any;

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void { }

}

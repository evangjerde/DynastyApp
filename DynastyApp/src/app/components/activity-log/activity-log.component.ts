import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/league.service';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css'],
})
export class ActivityLogComponent implements OnInit {
  activities;

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getActivityFeed().subscribe(
      (result) => {
        this.activities = result;
        console.log(result);
      });
  }

}

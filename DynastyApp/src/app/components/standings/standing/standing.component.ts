import { Component, Input, OnInit } from '@angular/core';
import { FleaflickerStandingTeam } from 'src/app/models/fleaflicker.model';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit {

  @Input() team: FleaflickerStandingTeam;

  constructor() { }

  ngOnInit(): void {
  }

}

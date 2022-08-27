import { Component, Input, OnInit } from '@angular/core';
import { Matchup } from '../league-scoreboard.model';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.css']
})
export class MatchupComponent implements OnInit {

  @Input() matchup: Matchup;

  constructor() { }

  ngOnInit(): void {
  }

}

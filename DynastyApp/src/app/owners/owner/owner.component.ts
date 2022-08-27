import { Component, Input, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner.model';
import { FleaflickerStandingTeam } from 'src/app/models/fleaflicker.model';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  @Input() owner: Owner;
  @Input() team: FleaflickerStandingTeam;
  @Input() order: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getImage(): string {
    return this.owner?.photoUrl || this.team?.logoUrl || '../../../assets/football-helmet.webp';
  }

  getOwner(): string {
    return this.owner?.name || this.team?.owners[0]?.displayName;
  }
}

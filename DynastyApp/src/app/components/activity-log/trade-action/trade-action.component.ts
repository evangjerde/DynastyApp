import { Component, Input, OnInit } from '@angular/core';
import { FleaflickerDraftPick, FleaflickerPlayer } from 'src/app/models/fleaflicker.model';
import { FormattedActivity, TradeSide } from '../activity-log.model';

@Component({
  selector: 'app-trade-action',
  templateUrl: './trade-action.component.html',
  styleUrls: ['./trade-action.component.css']
})
export class TradeActionComponent implements OnInit {
  @Input() activity: FormattedActivity;

  tradeSides: TradeSide[];
  numberOfSides: number;

  constructor() { }

  ngOnInit(): void {
    this.tradeSides = Object.keys(this.activity.trade.sides).map((key) => {
      return this.activity.trade.sides[key];
    })
    this.numberOfSides = this.tradeSides.length;
  }

  formatPlayer(player: FleaflickerPlayer): string {
    let playerName = player.proPlayer.nameFull;
    let playerRank = player.rankDraft.positions[0].formatted;

    return `${playerName}(${playerRank})`
  }

  formatPick(pick: FleaflickerDraftPick): string {
    const suffixes = ['st', 'nd', 'rd'];
    return `${pick.season}\t${pick.round}${suffixes[pick.round - 1]}`;
  }

  getColCount(): string {
    switch (this.numberOfSides) {
    case 2: 
      return 'col-md-6';
    case 3: 
      return 'col-sm-6 col-md-4';
    case 4: 
      return 'col-sm-6 col-md-3';
    default:
      return 'col-sm-6 col-md-3';
    }
  }

}

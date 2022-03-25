import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/league.service';
import { TradeBlockAction, TradeAction, ActivityResponse, Activity } from './activity-log.model';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css'],
})
export class ActivityLogComponent implements OnInit {
  private readonly TRADE_ACTION = 'TRANSACTION_TRADE';

  activities: ActivityResponse;

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getActivityFeed().subscribe(
      (result) => {
        let filteredActivities = this.condenseTrades(result);
        this.activities = filteredActivities;
        console.log(result);
      });
  }

  condenseTrades(activities: ActivityResponse): ActivityResponse {
    let tradeMap = {};
    if (activities.items.some(activity => activity.transaction?.type === this.TRADE_ACTION)) {
      activities.items.forEach(activity => {
        if (activity.transaction?.type === this.TRADE_ACTION) {
          let tradeId = activity.transaction.tradeId;
          let teamName = activity.transaction.team.name;
          let player = activity.transaction.player;
          let pick = activity.transaction.draftPick;

          tradeMap[tradeId] = tradeMap[tradeId] || {};
          let teamAssets = tradeMap[tradeId][teamName] || {};
          teamAssets
          
        }
      })
    }
    return activities;
  }

  tradeBlockAction(action: TradeBlockAction): string {
    let teamName = action.team.name;
    let playerName = action.player.proPlayer.nameFull;
    let playerRank = action.player.rankDraft.positions[0].formatted;

    let retString = `${teamName} has`;
    if (action.player.isOnTradingBlock) {
      retString = `${retString} placed ${playerName}(${playerRank}) on`
    } else {
      retString = `${retString} removed ${playerName}(${playerRank}) from`
    }
    return `${retString} the trading block.`
  }

  transactionAction(action: TradeAction) {

    'activity.transaction.team.name + ": " + activity.transaction.draftPick ? activity.transaction.draftPick.season + " " + activity.transaction.draftPick.round : activity.transaction.player'
  }

}

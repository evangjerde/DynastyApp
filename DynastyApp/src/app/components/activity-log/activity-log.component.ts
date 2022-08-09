import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';
import { TradeBlockAction, TradeAction, ActivityResponse, Activity, TransactionAction, FormattedActivity, TradeSide } from './activity-log.model';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css'],
})
export class ActivityLogComponent implements OnInit {
  activities: FormattedActivity[];

  readonly COMMISH = 'COMMISH';
  readonly TRADE_BLOCK = 'TRADE_BLOCK';
  readonly SETTING = 'SETTING';
  readonly INVALID = 'INVALID';
  readonly TRADE_ACTION = 'TRANSACTION_TRADE';

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getActivityFeed().subscribe(
      (result: ActivityResponse) => {
        let filteredActivities = this.formatActivities(result);
        this.activities = filteredActivities;
        console.log(this.activities);
      });
  }

  formatActivities (activityResponse: ActivityResponse): FormattedActivity[] {
    let formattedActivities: FormattedActivity[] = []
    activityResponse.items?.forEach((activity) => {
      let activityType = this.determineActivityType(activity);
      let formattedActivity: FormattedActivity = {timeEpochMilli: activity.timeEpochMilli, activityType: activityType};

      switch (activityType) {
      case this.COMMISH:
        formattedActivity.commishPowers = activity.commishPowers;
        formattedActivities.push(formattedActivity);
        break;
      case this.TRADE_BLOCK:
        formattedActivity.tradeBlock = activity.tradeBlock;
        formattedActivities.push(formattedActivity);
        break;
      case this.SETTING:
        formattedActivity.settings = activity.settings;
        formattedActivities.push(formattedActivity);
        break;
      case this.TRADE_ACTION:
        formattedActivities = this.condenseTrade(formattedActivity, activity, formattedActivities);
      }
    })

    return formattedActivities;
  }
  
  determineActivityType(activity: Activity): string {
    return activity.commishPowers ?
      this.COMMISH : activity.tradeBlock ?
        this.TRADE_BLOCK : activity.settings ?
          this.SETTING : activity.transaction ?
            activity.transaction.type : this.INVALID;
  }

  condenseTrade(fmtAct: FormattedActivity, act: Activity, activities: FormattedActivity[]): FormattedActivity[] {
    let currentTrade = activities.filter(activity => activity.activityType === this.TRADE_ACTION).find(activity => activity.trade.tradeId === act.transaction.tradeId)

    let existingTrade = !!currentTrade;

    if (!existingTrade) {
      currentTrade = fmtAct;
      currentTrade.trade = {
        tradeId: act.transaction.tradeId,
        sides: {}
      };
    }

    let side: TradeSide;
    
    if (!currentTrade.trade.sides[act.transaction.team.id]) {
      side = {
        team: act.transaction.team,
        players: [],
        picks: []
      };
    } else {
      side = currentTrade.trade.sides[act.transaction.team.id];
    }
    if (act.transaction.draftPick) {
      side.picks.push(act.transaction.draftPick);
    }
    if (act.transaction.player) {
      side.players.push(act.transaction.player);
    }
    currentTrade.trade.sides[side.team.id] = side;

    if (!existingTrade) {
      activities.push(currentTrade);
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

  transactionAction(action: TransactionAction) {
    console.log(action);

    'activity.transaction.team.name + ": " + activity.transaction.draftPick ? activity.transaction.draftPick.season + " " + activity.transaction.draftPick.round : activity.transaction.player'
  }

}

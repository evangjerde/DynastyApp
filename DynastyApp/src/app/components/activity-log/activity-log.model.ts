import { FleaflickerTeam, FleaflickerPlayer, FleaflickerDraftPick } from "src/app/fleaflicker.model";

export class ActivityResponse {
    items: Activity[];
    resultTotal: number;
}

export class Activity {
    timeEpochMilli: number;
    tradeBlock: TradeBlockAction;
    transaction: TransactionAction;
    commishPowers: any;
    settings: any;
}

export class TradeBlockAction {
    player: FleaflickerPlayer;
    team: FleaflickerTeam;
}

export class TransactionAction {
    type: string;
    tradeId: number;
    draftPick: FleaflickerDraftPick;
    player: FleaflickerPlayer;
    team: FleaflickerTeam;
}

export class TradeAction {
    tradeId: number;

}
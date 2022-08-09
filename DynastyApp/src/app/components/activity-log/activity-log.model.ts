import { FleaflickerTeam, FleaflickerPlayer, FleaflickerDraftPick } from "src/app/models/fleaflicker.model";

export class ActivityResponse {
    items: Activity[];
    resultTotal: number;
}

export class Activity {
    timeEpochMilli: number;
    transaction?: TransactionAction;
    tradeBlock?: TradeBlockAction;
    commishPowers?: CommishAction;
    settings?: any;
}

export class FormattedActivity {
    timeEpochMilli: number;
    activityType: string;
    trade?: TradeAction;
    transaction?: TransactionAction;
    tradeBlock?: TradeBlockAction;
    commishPowers?: CommishAction;
    settings?: any;
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
    sides: {[key: number]: TradeSide};
}

export class TradeSide {
    team: FleaflickerTeam;
    picks: FleaflickerDraftPick[];
    players: FleaflickerPlayer[];
}

export class CommishAction {
    commish: {
        id: number;
        initials: string;
        name: string;
    };
    description: string;
    tradeId?: number;
}
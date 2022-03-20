export class ActivityResponse {
    items: Activity[];
    resultTotal: number;
}

export class Activity {
    timeEpochMilli: number;
    tradeBlock: any;
    transaction: any;
    commishPowers: any;
    settings: any;
}
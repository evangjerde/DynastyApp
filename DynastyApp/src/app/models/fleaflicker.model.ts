export class FleaflickerPlayer {
    displayGroup: string;
    isKeeper: boolean;
    isOnTradingBlock: boolean;
    owner: FleaflickerTeam;
    proPlayer: NFLPlayer;
    rankDraft: DraftRank;
}

export class FleaflickerTeam {
    id: number;
    initial: string;
    name: string;
}

export class FleaflickerDraftPick {
    season: number;
    round: number;
}

export class NFLPlayer {
    headshotUrl: string;
    id: number;
    nameFirst: string;
    nameFull: string;
    nameLast: string;
    nameShort: string;
    nflByeWeek: number;
    position: string;
    proTeam: NFLTeam;
}

export class NFLTeam {
    abbreviation: string;
    location: string;
    name: string;
}

export class DraftRank {
    ordinal: number;
    positions: DraftPosition[];
    season: number;
}

export class DraftPosition {
    formatted: string;
    ordinal: number;
    position: {
        colors: string[];
        eligibility: string[];
        group: string;
        label: string;
    };
    rating: string;
}
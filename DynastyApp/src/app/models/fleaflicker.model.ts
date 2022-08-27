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
    initials: string;
    name: string;
    logoUrl?: string;
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

export interface FleaflickerStandings {
    divisions: FleaflickerDivision[];
    league: any;
    season: number;
}

export interface FleaflickerDivision {
    id: number;
    name: string;
    teams: FleaflickerStandingTeam[]
}

export interface FleaflickerStandingTeam extends FleaflickerTeam {
    owners: { displayName: string }[];
    pointsAgainst: FormattedString;
    pointsFor: FormattedString;
    recordDivision: FleaflickerDivRecord;
    recordOverall: FleaflickerRecord;
    recordPostseason: FleaflickerDivRecord;
    streak: FormattedString;
    waiverAcquisitionBudget: {
        formatted: string;
        value: number;
    }
}

export interface FleaflickerRecord {
    formatted: string;
    winPercentage: FormattedString;
}

export interface FleaflickerDivRecord extends FleaflickerRecord {
    rank: number;
}

export interface FormattedString {
    formatted: string;
}
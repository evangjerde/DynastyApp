import { FleaflickerTeam } from "../models/fleaflicker.model";

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

// export class FleaflickerTeam {
//     id: number;
//     initials: string;
//     name: string;
// }
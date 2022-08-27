import { FleaflickerStandingTeam, FormattedString } from "src/app/models/fleaflicker.model";

export interface FleaflickerScoreboard {
    elidgibleSchedulePeriods: SchedulePeriod[];
    games: Matchup[];
    schedulePeriod: SchedulePeriod;
}

export interface SchedulePeriod {
    low: any;
    ordinal: number;
    value: number;
}

export interface Matchup {
    away: FleaflickerStandingTeam;
    awayScore: TeamScore;
    home: FleaflickerStandingTeam;
    homeScore: TeamScore;
    id: string;
    isDivisional: boolean;
}

export interface TeamScore {
    projected: { formatted: string; value: number; };
    score: FormattedString;
    yetToPlay: number;
    yetToPlayPosition: string[];
}
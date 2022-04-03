import { Leader } from "src/app/models/espn.model";

export class StatCategory {
    name: string;
    leaders: Leader[];
}

export const offensiveStats = [
    'Passing Yards',
    'Rushing Yards',
    'Receiving Yards',
    'Passing Touchdowns',
    'Rushing Touchdowns',
    'Receiving Touchdowns',
    'Total Touchdowns',
    'Receptions',
    'Quarterback Rating',
    'Total Points'
]
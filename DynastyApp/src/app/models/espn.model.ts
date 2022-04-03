export class EspnLeaders {
    currentSeason: Season;
    leaders: LeaderList;
    requestedSeason: Season;
}

export class Season {
    displayName: string;
    endDate: string;
    startDate: string;
    type: SeasonType;
    year: number;
}

export class SeasonType {
    endDate: string;
    id: string;
    name: string;
    startDate: string;
    type: number;
    week: NflWeek;
}

export class NflWeek {
    endDate: string;
    number: number;
    startDate: string;
    text: string;
}

export class LeaderList {
    abbreviation: string;
    categories: LeaderCategory[];
    id: string;
    name: string;
}

export class LeaderCategory {
    abbreviation: string;
    displayName: string;
    leaders: Leader[];
    name: string;
}

export class Leader {
    athlete: EspnAthlete;
    displayValue: string;
    rel: string[];
    statistics: any;
    team: EspnTeam;
    teams: EspnTeam[];
    value: string;
}

export class EspnAthlete {
    birthPlace: EspnLocation;
    displayName: string;
    firstName: string;
    lastName: string;
    fullName: string;
    guid: string;
    headshot: EspnImage;
    id: string;
    jersey: string;
    links: EspnLink[];
    position: EspnPosition;
    shortName: string;
    uid: string;
}

export class EspnLocation {
    city: string;
    country: string;
    state: string;
}

export class EspnImage {
    alt: string;
    href: string;
    rel: string[];
    height: number;
    width: number;
}

export class EspnLink {
    href: string;
    isExternal: boolean;
    isPremium: boolean;
    language: string;
    rel: string[];
    shortText: string;
    text: string;
}

export class EspnPosition {
    abbreviation: string;
    displayName: string;
    id: string;
    leaf: boolean;
    name: string;
    parent: any;
    slug: string;
}

export class EspnTeam {
    abbreviation: string;
    alternateColor: string;
    color: string;
    displayName: string;
    id: string;
    links: EspnLink[];
    logos: EspnImage[];
    name: string;
    nickname: string;
    shortDisplayName: string;
    slug: string;
}
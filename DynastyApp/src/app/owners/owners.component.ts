import { Component, OnInit } from '@angular/core';

import { Owner } from '../models/owner.model';
import { LeagueService } from '../services/league.service';
import { FleaflickerStandings } from './owners.model';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  standings: FleaflickerStandings;

  ownerAttrs: Owner[] = [
    {
      name: 'Evan',
      team: `Evan's Pick Bank`,
      photoUrl: '../../assets/evan.jpeg',
      bio: 'Myyyyy Name is Eeeeeevvvvaaaaaaaannnnn...definitely a tool'
    },
    {
      name: 'Tyler aka Tubby',
      team: `Chasin’ Lambs`,
      photoUrl: '',
      bio: '#Milage'
    },
    {
      name: 'Sway',
      team: `All Pitts Stink`,
      photoUrl: '',
      bio: 'The Commish...not sure how we let him get in charge'
    },
    {
      name: 'Seamus',
      team: `Monaghan Manor`,
      photoUrl: '',
      bio: `This isn't a futbol league?`
    },
    {
      name: 'David',
      team: `token cake eater`,
      photoUrl: '',
      bio: 'The tradey boi himself'
    },
    {
      name: 'Feldt',
      team: `Rely On The C's`,
      photoUrl: '',
      bio: `hI i'M fElDt aNd i mOvE pLaCeS`
    },
    {
      name: 'Nick & Noah',
      team: `I’m Hard Man`,
      photoUrl: '',
      bio: 'Probably a couple'
    },
    {
      name: 'Logan',
      team: `Mahome Boy’s`,
      photoUrl: '',
      bio: 'Will owe JJ back massages in 5 years'
    },
    {
      name: 'Wally',
      team: `Stop Giving A$$ Trades`,
      photoUrl: '',
      bio: 'Basketball Basketball Basketball.  Basketball.  I jump higher than the Easter Bunny.'
    },
    {
      name: 'Herb',
      team: `Vacation Funds`,
      photoUrl: '',
      bio: 'Probably Irradiated'
    },
    {
      name: 'T-Marsh',
      team: `T-Marsh's Team`,
      photoUrl: '',
      bio: 'Probably Gay'
    },
    {
      name: 'Nels',
      team: `Treechi1d's Team`,
      photoUrl: '',
      bio: 'Shut the doys'
    },
  ]

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getStandings().subscribe(result => {
      this.standings = result;
    })
  }

  getPageTitle(): string {
    return this.standings ? `${this.standings?.league?.name} ${this.standings?.season} Owners` : '';
  }

  getOwner(teamName: string): Owner {
    return this.ownerAttrs.find(owner => {
      return owner.team === teamName;
    });
  }

}

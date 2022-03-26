import { Component, OnInit } from '@angular/core';

import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  owners: Owner[] = [
    {
      name: 'Evan',
      team: `Evan's Pick Bank`,
      photoUrl: '../../assets/evan.jpeg',
      bio: 'Myyyyy Name is Eeeeeevvvvaaaaaaaannnnn'
    },
    {
      name: 'Mau',
      team: 'The Fat Traitors',
      photoUrl: '../../assets/mau.jpeg',
      bio: `I'm a cat!  Meow!`
    },
    {
      name: 'Evan',
      team: `Evan's Pick Bank`,
      photoUrl: '../../assets/evan.jpeg',
      bio: 'Myyyyy Name is Eeeeeevvvvaaaaaaaannnnn'
    },
    {
      name: 'Mau',
      team: 'The Fat Traitors',
      photoUrl: '../../assets/mau.jpeg',
      bio: `I'm a cat!  Meow!`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

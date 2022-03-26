import { Component, Input, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner.model';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  @Input() owner: Owner;
  @Input() order: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

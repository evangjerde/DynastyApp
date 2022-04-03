import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  @Input() items;

  currentItem = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick() {
    const previous = this.currentItem - 1;
    this.currentItem = previous < 0 ? this.items.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentItem + 1;
    this.currentItem = next === this.items.length ? 0 : next;
  }

}

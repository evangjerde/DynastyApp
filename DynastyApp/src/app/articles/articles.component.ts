import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: any[] = [
    { title: 'Dynasty Rankings Preseason 2022', path: '2022psRankings' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}

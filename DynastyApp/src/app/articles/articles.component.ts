import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: any[] = [
    { title: 'Dynasty Rankings Preseason 2022', path: '2022psRankings' },
    { title: 'Dynasty Magazine Issue No. 6', path: 'https://dynasty-app-assets.s3.us-east-2.amazonaws.com/articles/Dynasty_Mag_Issue_6.pdf' },
    { title: 'Dynasty Magazine Issue No. 5', path: 'https://dynasty-app-assets.s3.us-east-2.amazonaws.com/articles/Dynasty_Mag_Issue_5.pdf' },
    { title: 'Dynasty Magazine Issue No. 4', path: 'https://dynasty-app-assets.s3.us-east-2.amazonaws.com/articles/Dynasty_Mag_Issue_4.pdf' },
    { title: 'Dynasty Magazine Issue No. 3', path: 'https://dynasty-app-assets.s3.us-east-2.amazonaws.com/articles/Dynasty_Mag_Issue_3.pdf' },
    { title: 'Dynasty Magazine Issue No. 2', path: 'https://dynasty-app-assets.s3.us-east-2.amazonaws.com/articles/Dynasty_Mag_Issue_2.pdf' },
    { title: 'Dynasty Magazine Issue No. 1', path: 'https://dynasty-app-assets.s3.us-east-2.amazonaws.com/articles/Dynasty_Mag_Issue_1.pdf' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}

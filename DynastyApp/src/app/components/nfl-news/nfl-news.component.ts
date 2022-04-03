import { Component, OnInit } from '@angular/core';
import { EspnFeedService } from 'src/app/services/espn-feed.service';
import { NewsFeedItem } from './news-feed.model';

@Component({
  selector: 'app-nfl-news',
  templateUrl: './nfl-news.component.html',
  styleUrls: ['./nfl-news.component.css']
})
export class NflNewsComponent implements OnInit {

  feedItems: NewsFeedItem[] = [
    {
      title: 'NFL News',
      image: '../../assets/logo.JPG',
      description: '',
      link: '',
      date: ''
    }
  ];

  constructor(private espnFeed: EspnFeedService) { }

  ngOnInit(): void {
    this.espnFeed.getNewsFeed().subscribe(
      (result) => {
        let data = new window.DOMParser().parseFromString(result, 'text/xml');

        const items = data.querySelectorAll("item")
        items.forEach(item => {
          let newsItem = {} as NewsFeedItem;

          newsItem.title = this.parseLineItem(item, "title");
          newsItem.description = this.parseLineItem(item, "description");
          newsItem.image = this.parseLineItem(item, "image");
          newsItem.link = this.parseLineItem(item, "link");
          newsItem.date = this.parseLineItem(item, "date");

          this.feedItems.push(newsItem);
        })
      });
  }

  parseLineItem(xmlElement: Element, itemTitle: string): string {
    let lineItem = xmlElement.querySelector(itemTitle)?.innerHTML;

    return lineItem?.substring(9, lineItem.length - 3);
  }

}

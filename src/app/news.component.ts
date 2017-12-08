import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {

  newses: any = [];

  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.getHeroes();

  }


  getHeroes() {
    return this.newsService.getNews().subscribe(news => {
      this.newses = news;
    });
  }

}

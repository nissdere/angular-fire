import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

import { News } from './news'

@Component({
  selector: 'app-newsadmin',
  templateUrl: './newsadmin.component.html',
  styles: []
})
export class NewsadminComponent implements OnInit {
    addingNews = false;
    showAdd = true;
    newses: any = [];
    selectedNews: News;

    constructor(private newsService : NewsService) { }
  
    ngOnInit() {
      this.getNewses();
  
    }
   
    cancel() {
      this.addingNews = false;
      this.selectedNews = null;
      this.showAdd = true;
    }
  
    deleteNews(news: News) {
      this.newsService.deleteNews(news).subscribe(res => {
        this.newses = this.newses.filter(h => h !== news);
        this.showAdd = true;
        if (this.selectedNews === news) {
          this.selectedNews = null;
        }
      });
    }
  
    getNewses() {
      return this.newsService.getNews().subscribe(newses => {
        this.newses = newses;
      });
    }
  
    enableAddMode() {
      this.addingNews = true;
      this.selectedNews = new News();
      this.showAdd = false;
    }
  
    onSelect(news: News) {
      this.addingNews = false;
      this.selectedNews = news;
      this.showAdd = false;
    }
  
    save() {
      if (this.addingNews) {
        this.newsService.addNews(this.selectedNews).subscribe(news => {
          this.addingNews = false;
          this.showAdd = true;
          this.selectedNews = null;
          this.newses.push(news);
        });
      } else {
        this.newsService.updateNews(this.selectedNews).subscribe(news => {
          this.addingNews = false;
          this.showAdd = true;
          this.selectedNews = null;
        });
      }
    }
  
  }
  
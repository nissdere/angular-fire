import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { News } from './news';

const api = '/api';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<Array<News>>(`${api}/news`)
  }

  deleteNews(news: News) {
    return this.http.delete(`${api}/news/${news._id}`);
  }

  addNews(news: News) {
    return this.http.post<News>(`${api}/news/`, news);
  }

  updateNews(news: News) {
    return this.http.put<News>(`${api}/news/${news._id}`, news);
  }

}

import { Component, Input } from '@angular/core';

import { ARTICLES } from './seed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() articles = ARTICLES;
  selectedArticle;

  showArticle(id) {
    this.selectedArticle = this.articles.find(a => a.id === Number(id));
  }

  deleteArticle(id) {
    this.articles = this.articles.filter(a => Number(a.id) !== Number(id));
  }
}

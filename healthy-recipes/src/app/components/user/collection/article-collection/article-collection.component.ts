import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { ArticlesService } from './../../../../services/articles.service';


@Component({
  selector: 'app-article-collection',
  templateUrl: './article-collection.component.html',
  styleUrls: ['./article-collection.component.css']
})
export class ArticleCollectionComponent implements OnInit {
  public userId;
  public createdArticles;

  constructor(private auth: AuthService, private articlesService: ArticlesService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('authkey');

    this.articlesService.articles
    .subscribe(items => {
      this.createdArticles = items.filter(item => item.userId === this.userId);
    });
  }

}

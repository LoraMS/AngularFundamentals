import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ArticlesService } from './../../../services/articles.service';
import { Article } from './../../../models/article';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  public article: Article;
  public commentsLength: number;
  public currentCommentsLength: number;

  constructor(private data: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      const id = params.id;
      this.data.getAtricleById(id).valueChanges().subscribe(data => {
        this.article = data;
        if (data.comments) {
            this.commentsLength = this.article.comments.length;
        }
        this.currentCommentsLength = this.commentsLength || 0;
      });
    });
  }

}

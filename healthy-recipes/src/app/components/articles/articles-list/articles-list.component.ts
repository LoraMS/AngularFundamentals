import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { Article } from './../../../models/article';
import { ArticlesService } from './../../../services/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  public article: Article;
  public articles: Array<Article>;

  constructor(private data: ArticlesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.data.articles.subscribe(data => {
      this.articles = data;
    },
    error => {
      this.toastr.error(error.message, 'Ooops!');
    }
  );
  }

}

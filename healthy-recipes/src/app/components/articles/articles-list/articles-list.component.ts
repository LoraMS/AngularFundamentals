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
  public searchWord: string;
  public sortBy: string;

  constructor(private data: ArticlesService, private toastr: ToastrService) {
    this.searchWord = '';
   }

  ngOnInit() {
    this.data.articles.subscribe(data => {
      this.articles = data;
    },
    error => {
      this.toastr.error(error.message, 'Ooops!');
    }
  );
  }

  orderByTitle() {
    this.articles.sort((a, b) => a.title.localeCompare(b.title));
  }

}

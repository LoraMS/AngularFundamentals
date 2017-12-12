import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './../../services/articles.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Recipe } from './../../models/recipe';
import { Article } from './../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipesRef: AngularFireList<Recipe[]> = null;
  articlesRef: AngularFireList<Article[]> = null;
  public recipes: any;
  public articles: any;

  constructor(private db: AngularFireDatabase, private articleData: ArticlesService) {
    this.recipesRef = db.list('/recipes', ref => ref.limitToLast(1));
    this.articlesRef = db.list('/articles', ref => ref.limitToLast(1));
   }

  ngOnInit() {
    this.recipesRef.valueChanges().subscribe(result => {
      this.recipes = result;
    });

    this.articlesRef.valueChanges().subscribe(result => {
      this.articles = result;
    });
  }

}

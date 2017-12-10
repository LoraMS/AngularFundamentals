import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { RecipesService } from '../../../services/recipes.service';
import { ArticlesService } from '../../../services/articles.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public isCollapsedRecipes = false;
  public isCollapsedArticles = false;
  public email: string;
  public userId: string;
  public createdRecipes;
  public createdArticles;
  public recipeCollectionLength;
  public articleCollectionLength;

  constructor(
    public auth: AuthService,
    private userS: UserService,
    private recipesService: RecipesService,
    private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.isCollapsedRecipes = true;
    this.isCollapsedArticles = true;
    this.email = localStorage.getItem('emailkey');
    this.userId = localStorage.getItem('authkey');

    this.recipesService.recipes
    .subscribe(items => {
      this.createdRecipes = items.filter(item => item.userId === this.userId);
      this.recipeCollectionLength = this.createdRecipes.length;
    });

    this.articlesService.articles
    .subscribe(items => {
      this.createdArticles = items.filter(item => item.userId === this.userId);
      this.articleCollectionLength = this.createdArticles.length;
    });
  }

}

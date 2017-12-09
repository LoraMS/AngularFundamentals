import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { RecipesService } from './../../../../services/recipes.service';

@Component({
  selector: 'app-recipe-collection',
  templateUrl: './recipe-collection.component.html',
  styleUrls: ['./recipe-collection.component.css']
})
export class RecipeCollectionComponent implements OnInit {
  public userId;
  public createdRecipes;

  constructor(private auth: AuthService, private recipesService: RecipesService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('authkey');

    this.recipesService.recipes
    .subscribe(items => {
      this.createdRecipes = items.filter(item => item.userId === this.userId);
    });
  }

}

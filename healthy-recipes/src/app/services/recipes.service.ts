import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';

import { Recipe } from './../models/recipe';

@Injectable()
export class RecipesService {
  private dbPath = '/recipes';

  recipe: AngularFireObject<Recipe> = null;
  recipesRef: AngularFireList<Recipe[]> = null;
  recipes: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private toastr: ToastrService, private router: Router) {
    this.recipesRef = db.list('/recipes');
    // Use snapshotChanges().map() to store the key
    this.recipes = this.recipesRef.snapshotChanges().map(changes => {
      return changes.map(c => {
          return { key: c.payload.key, ...c.payload.val() };
        });
    });
   }

  getRecipeById(recipeKey: string): AngularFireObject<Recipe> {
    return this.db.object(`${this.dbPath}/${recipeKey}`);
  }

  addRecipe(recipe: Recipe): void {
    const recipes =  this.db.list(`${this.dbPath}`);
    recipes.push(recipe);
  }

  editRecipe(recipeKey: string, recipe: object) {
    this.db.object(`${this.dbPath}/${recipeKey}`).update(recipe)
      .then((data) => console.log(data))
      .catch((error) => {
        this.toastr.error(error.message, 'Ooops!');
        this.router.navigate(['/']);
      });
  }

  removeRecipe(recipeKey: string) {
    this.db.object(`${this.dbPath}/${recipeKey}`).remove()
    .then((data) => console.log(data))
    .catch((error) => {
      this.toastr.error(error.message, 'Ooops!');
      this.router.navigate(['/']);
    });
  }
}

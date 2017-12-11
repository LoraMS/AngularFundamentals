import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Recipe } from '../../../models/recipe';
import { RecipesService } from './../../../services/recipes.service';

const categories = ['breakfast', 'soups', 'salads', 'desserts', 'breads', 'main dishes', 'side dishes'];

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  public recipeKey: string;
  public recipe;

  constructor(private data: RecipesService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeKey = this.route.snapshot.params['id'];
    this.data.getRecipeById(this.recipeKey)
    .valueChanges()
    .subscribe((result) => {
      this.recipe = result;
    });
  }

  editRecipe(formData) {
    this.data.editRecipe(this.recipeKey, this.recipe);
    this.toastr.success('Your recipe was updated successfully!', 'Success!');

    this.router.navigate(['recipes']);
  }

  search = (text$: Observable<string>) =>
  text$
    .debounceTime(200)
    .distinctUntilChanged()
    .map(term => term.length < 1 ? []
      : categories.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 5))

}

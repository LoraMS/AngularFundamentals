import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Recipe } from '../../../models/recipe';
import { RecipesService } from './../../../services/recipes.service';

const categories = ['breakfast', 'soups', 'salads', 'desserts', 'breads', 'main dishes', 'side dishes'];

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  public title = '';
  public author = '';
  public userId = '';
  public category = '';
  public createdOn = null;
  public description = '';
  public ingredients = '';
  public steps = '';
  public image = '';
  public likes = 0;
  public userLiked = null;
  public comments = null;

  constructor(private data: RecipesService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() { }

  addRecipe(formData) {
    const newRecipe = new Recipe(this.title, this.author, localStorage.getItem('authkey'),
       this.category, Date.now(), this.description, this.ingredients, this.steps, this.image, this.likes, this.userLiked, this.comments);
    this.data.addRecipe(newRecipe);
    this.toastr.success('Your recipe was added successfully!', 'Success!');
    this.router.navigate(['/recipes']);
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : categories.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 5))
}

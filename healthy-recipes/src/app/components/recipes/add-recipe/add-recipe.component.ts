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
const IMAGE_REGEX = /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/;

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

  public recipeForm: FormGroup;
  public titleMessage: string;
  public authorMessage: string;
  public categoryMessage: string;
  public descriptionMessage: string;
  public ingredientsMessage: string;
  public stepsMessage: string;
  public imageMessage: string;

  constructor(private data: RecipesService, private router: Router, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit() {
    this.recipeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      category: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(200)]],
      ingredients: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      steps: ['', [Validators.required, Validators.minLength(100), Validators.maxLength(1000)]],
      image: ['', [Validators.required, Validators.pattern(IMAGE_REGEX)]]
    });

    const titleControl = this.recipeForm.get('title');
    titleControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setTitleMessage(titleControl);
    });

    const authorControl = this.recipeForm.get('author');
    authorControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setAuthorMessage(authorControl);
    });

    const categoryControl = this.recipeForm.get('category');
    categoryControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setCategoryMessage(categoryControl);
    });

    const descriptionControl = this.recipeForm.get('description');
    descriptionControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setDescriptionMessage(descriptionControl);
    });

    const ingredientsControl = this.recipeForm.get('ingredients');
    ingredientsControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setIngredientsMessage(ingredientsControl);
    });

    const stepsControl = this.recipeForm.get('steps');
    stepsControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setStepsMessage(stepsControl);
    });

    const imageControl = this.recipeForm.get('image');
    imageControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setImageMessage(imageControl);
    });
   }

   setTitleMessage(c: AbstractControl): void {
    this.titleMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.titleMessage = 'Title is required!';
      }
      if (c.errors.minlength) {
        this.titleMessage = 'Title should be at least 5 symbols long!';
      }
      if (c.errors.maxlength) {
        this.titleMessage = 'Title should be at maximum 45 symbols long!';
      }
    }
  }

  setAuthorMessage(c: AbstractControl): void {
    this.authorMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.authorMessage = 'Author is required!';
      }
      if (c.errors.minlength) {
        this.authorMessage = 'Author should be at least 2 symbols long!';
      }
      if (c.errors.maxlength) {
        this.authorMessage = 'Author should be at maximum 40 symbols long!';
      }
    }
  }

  setCategoryMessage(c: AbstractControl): void {
    this.categoryMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.categoryMessage = 'Category is required!';
      }
      if (c.errors.minlength) {
        this.categoryMessage = 'Category should be at least 2 symbols long!';
      }
      if (c.errors.maxlength) {
        this.categoryMessage = 'Category should be at maximum 20 symbols long!';
      }
    }
  }

  setDescriptionMessage(c: AbstractControl): void {
    this.descriptionMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.descriptionMessage = 'Description is required!';
      }
      if (c.errors.minlength) {
        this.descriptionMessage = 'Description should be at least 50 symbols long!';
      }
      if (c.errors.maxlength) {
        this.descriptionMessage = 'Description should be at maximum 200 symbols long!';
      }
    }
  }

  setIngredientsMessage(c: AbstractControl): void {
    this.ingredientsMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.ingredientsMessage = 'Ingredients are required!';
      }
      if (c.errors.minlength) {
        this.ingredientsMessage = 'Ingredients should be at least 50 symbols long!';
      }
      if (c.errors.maxlength) {
        this.ingredientsMessage = 'Ingredients should be at maximum 500 symbols long!';
      }
    }
  }

  setStepsMessage(c: AbstractControl): void {
    this.stepsMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.stepsMessage = 'Steps are required!';
      }
      if (c.errors.minlength) {
        this.stepsMessage = 'Steps should be at least 100 symbols long!';
      }
      if (c.errors.maxlength) {
        this.stepsMessage = 'Steps should be at maximum 1000 symbols long!';
      }
    }
  }

  setImageMessage(c: AbstractControl): void {
    this.imageMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.imageMessage = 'Image is required!';
      }
      if (c.errors.pattern) {
        this.imageMessage = 'Please enter a valid image address!';
      }
    }
  }

  addRecipe() {
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

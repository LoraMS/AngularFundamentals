import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { RecipesService } from './../../../services/recipes.service';
import { Recipe } from './../../../models/recipe';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  public recipe: Recipe;
  public currentRate: number;
  public commentsLength: number;
  public currentCommentsLength: number;
  public recipeKey: string;
  public path = 'recipes';
  public userId: string;
  isLiked: any;

  constructor(
    private data: RecipesService,
    private route: ActivatedRoute,
    config: NgbRatingConfig,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService) {
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
    this.userId = localStorage.getItem('authkey');
    this.route.params
      .subscribe(params => {
        this.recipeKey = params.id;
        this.data.getRecipeById(this.recipeKey).valueChanges().subscribe(data => {
          this.recipe = data;
          this.currentRate = data.likes;
          data.userLiked = data.userLiked || [];
          this.isLiked = data.userLiked.find(like => like === this.userId);
          if (data.comments) {
            this.commentsLength = this.recipe.comments.length;
          }
          this.currentCommentsLength = this.commentsLength || 0;
        });
      });
  }

  isAuthenticated() {
    return this.auth.isAuthenticated;
  }

  isAuthor(authorId: string) {
    if (this.auth.currentUserId === authorId) {
      return true;
    }
    return false;
  }

  remove() {
    const recipeKey = this.route.snapshot.params['id'];
    this.data.removeRecipe(recipeKey);

    this.toastr.success('Your recipe was removed successfully!', 'Success!');

    this.router.navigate(['recipes']);
  }

  rateRecipe(recipeKey) {
    this.recipe.likes = this.recipe.likes + 1;
    this.recipe.userLiked.push(this.userId);
    if (this.isLiked) {
        this.toastr.info('Your like was already added!', 'Info');
    } else {
        this.data.editRecipe(recipeKey, this.recipe);
        this.toastr.success('Your like was added successfully!', 'Success!');
    }

    this.router.navigate(['recipes/' + recipeKey]);
  }

}

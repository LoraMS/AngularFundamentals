import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import { RecipesService } from './../../../services/recipes.service';
import { Recipe } from './../../../models/recipe';

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


  constructor(private data: RecipesService, private route: ActivatedRoute, config: NgbRatingConfig) {
    config.max = 10;
    config.readonly = true;
   }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      const id = params.id;
      this.data.getRecipeById(id).valueChanges().subscribe(data => {
        this.recipe = data;
        this.currentRate = data.likes;
        if (data.comments) {
            this.commentsLength = this.recipe.comments.length;
        }
        this.currentCommentsLength = this.commentsLength || 0;
      });
    });
  }

}

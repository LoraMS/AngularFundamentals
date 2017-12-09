import { Component, OnInit } from '@angular/core';
import { RecipesService } from './../../../services/recipes.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './../../../models/recipe';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  public recipe: Recipe;
  public recipes: Array<Recipe>;

  constructor(private data: RecipesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.data.recipes.subscribe(data => {
        this.recipes = data;
      },
      error => {
        this.toastr.error(error.message, 'Ooops!');
      }
    );
  }

}

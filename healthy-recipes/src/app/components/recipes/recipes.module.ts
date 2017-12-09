import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ],
    declarations: [
        RecipesListComponent,
        AddRecipeComponent,
        RecipeDetailsComponent,
        EditRecipeComponent
],
    exports: [
        RecipesListComponent,
        AddRecipeComponent,
        RecipeDetailsComponent,
        EditRecipeComponent
    ]
})
export class RecipesModule { }

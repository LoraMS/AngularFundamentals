import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

import { RecipeAuthorGuard } from './../../guards/recipe-author.guard';
import { AuthGuard } from './../../guards/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: RecipesListComponent, pathMatch: 'full'  },
    { path: 'add', component: AddRecipeComponent, canActivate: [AuthGuard], pathMatch: 'full'  },
    { path: ':id', component: RecipeDetailsComponent, pathMatch: 'full'  },
    { path: ':id/edit', component: EditRecipeComponent, canActivate: [RecipeAuthorGuard], pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule { }

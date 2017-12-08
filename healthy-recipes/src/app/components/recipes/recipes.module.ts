import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RecipesRoutingModule
    ],
    declarations: [
        RecipesComponent
    ],
    exports: [
        RecipesComponent
    ]
})
export class RecipesModule { }

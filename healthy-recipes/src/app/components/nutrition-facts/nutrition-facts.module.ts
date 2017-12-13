import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NutritionFactsRoutingModule } from './nutrition-facts-routing.module';
import { SharedModule } from './../shared/shared.module';

import { NutritionFactsListComponent } from './nutrition-facts-list/nutrition-facts-list.component';
import { AddNutritionFactsComponent } from './add-nutrition-facts/add-nutrition-facts.component';
import {NutritionFactsDetailsComponent } from './nutrition-facts-details/nutrition-facts-details.component';
// import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        NutritionFactsRoutingModule,
        SharedModule
    ],
    declarations: [
        NutritionFactsListComponent,
        AddNutritionFactsComponent,
        NutritionFactsDetailsComponent,
],
    exports: [ ]
})
export class NutritionFactsModule { }

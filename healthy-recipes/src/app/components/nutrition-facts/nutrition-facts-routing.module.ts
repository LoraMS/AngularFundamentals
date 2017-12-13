import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { NutritionFactsListComponent } from './nutrition-facts-list/nutrition-facts-list.component';
import { AddNutritionFactsComponent } from './add-nutrition-facts/add-nutrition-facts.component';
import { NutritionFactsDetailsComponent } from './nutrition-facts-details/nutrition-facts-details.component';

import { AdminGuard } from './../../guards/admin.guard';

const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: NutritionFactsListComponent},
    { path: 'add', component: AddNutritionFactsComponent, canActivate: [AdminGuard] },
    { path: ':id', component: NutritionFactsDetailsComponent  },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NutritionFactsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/shared/page.not.found/page.not.found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', loadChildren: './components/user/user.module#UserModule' },
  { path: 'recipes', loadChildren: './components/recipes/recipes.module#RecipesModule' },
  { path: 'articles', loadChildren: './components/articles/articles.module#ArticlesModule' },
  { path: 'nutritionfacts', loadChildren: './components/nutrition-facts/nutrition-facts.module#NutritionFactsModule' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }


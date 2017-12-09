import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AddArticleComponent } from './add-article/add-article.component';
// import { EditArticleComponent } from './edit-article/edit-article.component';

// import { ArticleAuthorGuard } from './../../guards/article-author.guard';
import { AuthGuard } from './../../guards/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: 'articles', pathMatch: 'full' },
    { path: 'articles', component: ArticlesListComponent },
    { path: 'add', component: AddArticleComponent, canActivate: [AuthGuard] },
    { path: ':id', component: ArticleDetailsComponent },
    // { path: ':id/edit', component: EditArticleComponent, canActivate: [ArticleAuthorGuard]},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ArticlesRoutingModule { }

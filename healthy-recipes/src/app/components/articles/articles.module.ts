import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticlesRoutingModule } from './articles-routing.module';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AddArticleComponent } from './add-article/add-article.component';
// import { EditArticleComponent } from './edit-article/edit-article.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ArticlesRoutingModule
  ],
  declarations: [
    ArticlesListComponent,
    AddArticleComponent,
    ArticleDetailsComponent,
    // EditArticleComponent
  ],
  exports: [
    ArticlesListComponent,
    AddArticleComponent,
    ArticleDetailsComponent,
    // EditArticleComponent
]
})
export class ArticlesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RecipeCollectionComponent } from './collection/recipe-collection/recipe-collection.component';
import { ArticleCollectionComponent } from './collection/article-collection/article-collection.component';
import { UserRoutingModule } from './user-routing.module';
import { ZoomTextDirective } from './../../directives/zoom-text.directive';
import { FieldMatchesValidatorDirective } from './../../directives/equal-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
  declarations: [
    LoginComponent,
    ProfileComponent,
    RecipeCollectionComponent,
    ArticleCollectionComponent,
    ZoomTextDirective,
    FieldMatchesValidatorDirective
  ],
  providers: [ ],
})
export class UserModule { }

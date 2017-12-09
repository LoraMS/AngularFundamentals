import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './../environments/firebaseConfig';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';
import { RecipesModule } from './components/recipes/recipes.module';
import { ArticlesModule } from './components/articles/articles.module';
import { UserModule } from './components/user/user.module';

import { AuthGuard } from './guards/auth.guard';
import { RecipeAuthorGuard } from './guards/recipe-author.guard';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { RecipesService } from './services/recipes.service';
import { ArticlesService } from './services/articles.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    RecipesModule,
    ArticlesModule,
    UserModule
  ],
  providers: [AuthService, UserService, RecipesService, ArticlesService, AuthGuard, RecipeAuthorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


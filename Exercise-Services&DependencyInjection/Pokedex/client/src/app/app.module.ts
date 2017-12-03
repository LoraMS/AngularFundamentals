import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interseptor';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeSearchService } from './services/poke-search.service';
import { TableElementComponent } from './components/table-element/table-element.component';
import { FocuseService } from './services/focus.service';
import { FocusedComponent } from './components/focused/focused.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PokeTableComponent,
    TableElementComponent,
    FocusedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    PokeSearchService,
    FocuseService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

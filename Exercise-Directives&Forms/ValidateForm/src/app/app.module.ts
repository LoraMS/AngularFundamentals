import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistracionFormComponent } from './registracion-form/registracion-form.component';
import { DubCheck } from './validateName';


@NgModule({
  declarations: [
    AppComponent,
    RegistracionFormComponent
],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [DubCheck],
  bootstrap: [AppComponent]
})
export class AppModule { }

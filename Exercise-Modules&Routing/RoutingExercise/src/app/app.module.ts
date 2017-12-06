import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { OrangeComponent } from './orange/orange.component';
import { AttackComponent } from './attack/attack.component';
import { ErrorComponent } from './error/error.component';

import { AuthGuard } from './auth.guard';
import { TargetGuard } from './target.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlueComponent,
    RedComponent,
    GreenComponent,
    OrangeComponent,
    AttackComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [AuthGuard, TargetGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { TargetGuard } from './target.guard';

import { HomeComponent } from './home/home.component';
import { OrangeComponent } from './orange/orange.component';
import { GreenComponent } from './green/green.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { AttackComponent } from './attack/attack.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    { path: '', canActivate: [AuthGuard], redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'attack', component: AttackComponent },
    { path: 'blue', canActivate: [TargetGuard], component: BlueComponent },
    { path: 'red', canActivate: [TargetGuard], component: RedComponent },
    { path: 'green', canActivate: [TargetGuard], component: GreenComponent },
    { path: 'orange', canActivate: [TargetGuard], component: OrangeComponent },
    { path: 'error', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }

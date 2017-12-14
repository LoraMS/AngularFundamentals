import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

import { RecipesService } from './../services/recipes.service';
import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class RecipeAuthorGuard implements CanActivate {
    public userId;
    public role;

    constructor(
        private router: Router,
        private recipeData: RecipesService,
        private userData: UserService,
        private toastr: ToastrService,
        private auth: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
            const id = route.params['id'];
            this.userId = localStorage.getItem('authkey');

            this.userData.getUserById(localStorage.getItem('authkey')).valueChanges()
            .subscribe(u => {
            this.role = u['role'];
            });

            return this.recipeData.getRecipeById(id).valueChanges()
                     .take(1)
                     .map((r) => {
                        return r.userId === this.userId || this.role === 'admin';
                     })
                     .do(authorized => {
                       if (!authorized) {
                        this.toastr.error('You have no permissions to make this changes!', 'Error!');
                        this.router.navigate(['/recipes']);
                       } else {
                           return true;
                       }
                     });
      }
}

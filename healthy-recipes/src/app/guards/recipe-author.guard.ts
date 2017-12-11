import { RecipesService } from './../services/recipes.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class RecipeAuthorGuard implements CanActivate {
    public userId;

    constructor(private router: Router, private data: RecipesService, private toastr: ToastrService, private auth: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const id = route.params['id'];
        let result: boolean;
        if (id) {
            this.data.getRecipeById(id).valueChanges()
                .subscribe((recipe) => {
                    this.userId = localStorage.getItem('authkey');
                    if (recipe.userId === this.userId) {
                        result = true;
                    } else {
                        this.toastr.error('You have no permissions to make this changes!', 'Error!');
                        this.router.navigate(['/recipes']);
                    }
                });
        } else {
            this.router.navigate(['/recipes']);
        }
        return result;
    }
}

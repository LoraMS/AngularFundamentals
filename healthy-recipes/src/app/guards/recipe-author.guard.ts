import { RecipesService } from './../services/recipes.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class RecipeAuthorGuard implements CanActivate {
    public userId;

    constructor(private router: Router, private afAuth: AngularFireAuth, private data: RecipesService) {
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
                        this.router.navigate(['/user']);
                    }
                });
        } else {
            this.router.navigate(['/user']);
        }

        return result;
    }
}

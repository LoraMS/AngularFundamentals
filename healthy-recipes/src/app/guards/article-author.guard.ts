import { ArticlesService } from './../services/articles.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ArticleAuthorGuard implements CanActivate {
    public userId;

    constructor(private router: Router, private data: ArticlesService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const id = route.params['id'];
        let result: boolean;

        if (id) {
            this.data.getAtricleById(id).valueChanges()
                .subscribe((article) => {
                    this.userId = localStorage.getItem('authkey');
                    if (article.userId === this.userId) {
                        result = true;
                    } else {
                        this.router.navigate(['/articles']);
                    }
                });
        } else {
            this.router.navigate(['/articles']);
        }

        return result;
    }
}

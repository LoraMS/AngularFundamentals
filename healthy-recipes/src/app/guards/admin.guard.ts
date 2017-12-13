import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdminGuard implements CanActivate {
    public userId;
    public role;

    constructor(
        private router: Router,
        private userData: UserService,
        private toastr: ToastrService,
        private auth: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
            this.userId = localStorage.getItem('authkey');
            // .subscribe(u => {
            // this.role = u['role'];
            // });

            return this.userData.getUserById(localStorage.getItem('authkey')).valueChanges()
                     .take(1)
                     .map((u) => {
                        this.role = u['role'];
                        return this.role === 'admin';
                     })
                     .do(authorized => {
                       if (!authorized) {
                        this.toastr.error('Access denied!', 'Error!');
                        this.router.navigate(['/']);
                       } else {
                           return true;
                       }
                     });
      }
}

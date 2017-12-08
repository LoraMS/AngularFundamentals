import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class UserService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }




  // getUser(key: string) {
  //   const id = this.auth.authState.uid;
  //   const usersPath =  `users/id`;
  //   this.user = this.getUsers(usersPath);

  //   return this.user;
  //   }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { UserInterface } from './../interfaces/user';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  authState: any = null;
  public authUpdated: Subject<boolean> = new Subject<boolean>();

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private userData: UserService,
    private router: Router) {

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      this.authUpdated.next(this.authState);
    });
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false;
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true;
    } else {
      return false;
    }
  }

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }

  get currentUser(): any {
    return this.isAuthenticated ? this.authState : null;
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid : '';
  }

  signUpWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        localStorage.setItem('authkey', user.uid);
        localStorage.setItem('emailkey', user.email);
        this.authState = user;
      })
      // .then(() => {
      //   this.userData.add(this.currentUserId, model);
      // })
      .catch((error) => console.log(error));
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        localStorage.setItem('authkey', user.uid);
        localStorage.setItem('emailkey', user.email);
        this.router.navigateByUrl('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signOut(): void {
    this.afAuth.auth.signOut()
      .then(() => {
        localStorage.removeItem('authkey');
        localStorage.removeItem('emailkey');
        this.router.navigate(['/']);
      });

  }

}

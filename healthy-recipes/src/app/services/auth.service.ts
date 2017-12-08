import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public authState: any = null;
  public user;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  get currentUser(): any {
    return this.isAuthenticated ? this.authState : null;
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

  signUpWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        localStorage.setItem('authkey', user.uid);
        localStorage.setItem('emailkey', user.email);
      })
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
        localStorage.clear();
        this.router.navigate(['/']);
      });

  }

}

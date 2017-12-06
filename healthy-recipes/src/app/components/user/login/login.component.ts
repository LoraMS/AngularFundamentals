import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = {name: '', message: ''};
  }

  onSignUp(): void {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.auth.signUpWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/']);
        }).catch(_error => {
          this.error = _error;
          this.router.navigate(['/']);
        });
    }
  }

  onLoginEmail(): void {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.auth.loginWithEmail(this.email, this.password)
        .then(() => this.router.navigate(['/']))
        .catch(_error => {
          this.error = _error;
          this.router.navigate(['/']);
        });
    }
  }

  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      this.errorMessage = 'Please enter Email!';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'Please enter Password!';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'Password should be at least 6 characters!';
      return false;
    }

  this.errorMessage = '';

    return true;
  }

}

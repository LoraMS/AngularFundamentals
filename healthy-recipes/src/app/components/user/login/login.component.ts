import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private user: User;
  private userId;

  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = {name: '', message: ''};
  }

  onSignUp(): void {
    this.clearErrorMessage();
    const user = new User(this.name, this.username, this.email, this.role);

    if (this.validateForm(this.email, this.password)) {
      this.auth.signUpWithEmail(this.email, this.password, user);
        // .then(() => {
        //   this.toastr.success('You have sign up!', 'Success!');
        //   this.router.navigate(['/']);
        // })
        // .catch((error) => {
        //   this.toastr.error(error.message, 'Ooops!');
        //   this.router.navigate(['/']);
        // });
    }
  }

  onLoginEmail(): void {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.auth.loginWithEmail(this.email, this.password);
        // .then(() => {
        //   this.router.navigate(['/']);
        //   this.toastr.success('You have logged in!', 'Success!');
        // })
        // .catch((error) => {
        //   this.toastr.error(error.message, 'Ooops!');
        //   this.router.navigate(['/']);
        // });
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

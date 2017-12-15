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
  password2: string;
  role: string;
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  // clearErrorMessage() {
  //   this.errorMessage = '';
  //   this.error = {name: '', message: ''};
  // }

  onSignUp(): void {
    // this.clearErrorMessage();
    const user = new User(this.name, this.username, this.email, this.role);

    // if (this.validatePassword(this.password, this.password)) {
      this.auth.signUpWithEmail(this.email, this.password, user);
    // }
  }

  onLoginEmail(): void {
      this.auth.loginWithEmail(this.email, this.password);
  }

  // validatePassword(password: string, confirmPassword: string): boolean {
  //   if (password !== confirmPassword) {
  //     this.errorMessage = 'Password did not much!';
  //     return false;
  //   }

  // this.errorMessage = '';

  //   return true;
  // }

}

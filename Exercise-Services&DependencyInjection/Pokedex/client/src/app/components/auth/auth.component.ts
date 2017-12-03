import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  payload: any = {
    username: '',
    password: ''
  };

  sub$;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  collectAuthData(e): void {
    // console.log(e.target);
    this.payload[e.target.name] = e.target.value;
    // console.log(this.payload); // {username: "user", password: "pass"}
  }

  login() {
    this.sub$ = this.authService.authFunc(this.payload)
    .subscribe(data => {
      console.log(data);
      sessionStorage.setItem('authtoken', data['authtoken']);
    });
  }

}

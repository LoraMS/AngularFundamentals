import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public isCollapsedRecipes = false;
  public isCollapsedArticles = false;
  public email: string;
  public id: string;

  constructor(public auth: AuthService, private userS: UserService) {
  }

  ngOnInit() {
    this.isCollapsedRecipes = true;
    this.isCollapsedArticles = true;
    this.email = localStorage.getItem('emailkey');
    this.id = localStorage.getItem('authkey');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Choose your faction';

  constructor( private router: Router) { }

  ngOnInit() {
  }

  selectTeam(e) {
    // console.log(e.target.innerHTML);
    sessionStorage.setItem('token', e.target.innerHTML.toLowerCase());
    this.router.navigate(['/attack']);
  }
}

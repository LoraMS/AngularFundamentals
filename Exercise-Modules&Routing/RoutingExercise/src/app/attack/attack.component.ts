import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css']
})
export class AttackComponent implements OnInit {
  title = 'Select faction to attack';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  attackTeam(e) {
    const target = e.target.innerHTML.toLowerCase();
    // console.log(target);
    this.router.navigate([target]);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}

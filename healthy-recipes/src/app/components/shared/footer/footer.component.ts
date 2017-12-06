import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



// import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styles: []
// })
// export class FooterComponent implements OnInit {
//   coursesObservable: Observable<any[]>;
//   constructor(private db: AngularFireDatabase) { }
//   ngOnInit() {
//     this.coursesObservable = this.getCourses('/recipes');
//   }
//   getCourses(listPath): Observable<any[]> {
//     return this.db.list(listPath).valueChanges();
//   }
// }

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';

import { User } from './../models/user';

@Injectable()
export class UserService {
  private dbPath = '/users';

  user: AngularFireObject<User> = null;
  usersRef: AngularFireList<User[]> = null;
  users: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private toastr: ToastrService, private router: Router) {
    this.usersRef = db.list('/users');
    this.users = this.usersRef.snapshotChanges().map(changes => {
      return changes.map(c => {
        return { key: c.payload.key, ...c.payload.val() };
      });
    });
  }

  addUser(userId, user: User): void {
    const path = `users/${userId}`;

    this.db.object(path)
    .set(user)
    .catch((error) => this.toastr.error(error.message, 'Ooops!'));
  }

  getUserById(userKey: string) {
    return this.db.object(`${this.dbPath}/${userKey}`);
  }

}

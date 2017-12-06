import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserInterface } from '../interfaces/user';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  private db: AngularFireDatabase;
  private firebaseCollection;
  public items;
  public user;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  add(userId: string, user: UserInterface): void {
    const path = `users/${userId}`;

    this.db.object(path)
        .set(user)
        .catch((error) => console.log(error));
}

set(userId: string, data: object) {
    const path = `users/${userId}`;

    this.db.object(path)
        .set(data)
        .catch((error) => console.log(error));
}

}

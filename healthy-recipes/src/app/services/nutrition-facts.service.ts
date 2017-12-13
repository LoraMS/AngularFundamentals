import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';

import { NutritionFacts } from './../models/nutrition-facts';

@Injectable()
export class NutritionFactsService {
  private dbPath = '/nutritionsfacts';

  nutritionFacts: AngularFireObject<NutritionFacts> = null;
  allNutritionFactsRef: AngularFireList<NutritionFacts[]> = null;
  allNutritionFacts: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private toastr: ToastrService, private router: Router) {
    this.allNutritionFactsRef = db.list('/nutritionsfacts');
    // Use snapshotChanges().map() to store the key
    this.allNutritionFacts = this.allNutritionFactsRef.snapshotChanges().map(changes => {
      return changes.map(c => {
          return { key: c.payload.key, ...c.payload.val() };
        });
    });
   }

  getNutritionFactsById(key: string): AngularFireObject<NutritionFacts> {
    return this.db.object(`${this.dbPath}/${key}`);
  }

  addNutritionFacts(facts: NutritionFacts): void {
    const nutritionFacts =  this.db.list(`${this.dbPath}`);
    nutritionFacts.push(facts);
  }

  removeNutritionFacts(key: string) {
    this.db.object(`${this.dbPath}/${key}`).remove()
    .then((data) => console.log(data))
    .catch((error) => {
      this.toastr.error(error.message, 'Ooops!');
      this.router.navigate(['/nutritionfacts']);
    });
  }
}

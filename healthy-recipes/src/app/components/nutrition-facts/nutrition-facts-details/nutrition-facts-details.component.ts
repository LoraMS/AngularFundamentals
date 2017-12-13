import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { NutritionFactsService } from './../../../services/nutrition-facts.service';
import { NutritionFacts } from './../../../models/nutrition-facts';
import { AuthService } from '../../../services/auth.service';
import { UserService } from './../../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nutrition-facts-details',
  templateUrl: './nutrition-facts-details.component.html',
  styleUrls: ['./nutrition-facts-details.component.css']
})
export class NutritionFactsDetailsComponent implements OnInit {
  public fact: NutritionFacts;
  public userId: string;
  public key: string;
  public role: string;
  public totalFat: number;
  public totalCarbohydrate: number;

  constructor(
    private data: NutritionFactsService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private userData: UserService,
    private router: Router,
    private toastr: ToastrService) {}

    ngOnInit() {
      this.userId = localStorage.getItem('authkey');
      this.route.params
        .subscribe(params => {
          this.key = params.id;
          this.data.getNutritionFactsById(this.key).valueChanges().subscribe(data => {
            this.fact = data;
            this.totalFat = data.saturatedFat + data.transFat;
            this.totalCarbohydrate = data.dietaryFiber + data.totalSugars;
          });
        });

      this.userData.getUserById(localStorage.getItem('authkey')).valueChanges()
      .subscribe(u => {
      this.role = u['role'];
      });
    }

    isAuthenticated() {
      return this.auth.isAuthenticated;
    }

    isAuthor(authorId: string) {
      if (this.auth.currentUserId === authorId) {
        return true;
      }
      return false;
    }

    remove() {
      const key = this.route.snapshot.params['id'];
      this.data.removeNutritionFacts(key);

      this.toastr.success('Nutrition Facts removed successfully!', 'Success!');

    this.router.navigate(['nutritionfacts']);
    }

}

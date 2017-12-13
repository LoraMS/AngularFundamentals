import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { NutritionFacts } from '../../../models/nutrition-facts';
import { NutritionFactsService } from './../../../services/nutrition-facts.service';

@Component({
  selector: 'app-add-nutrition-facts',
  templateUrl: './add-nutrition-facts.component.html',
  styleUrls: ['./add-nutrition-facts.component.css']
})
export class AddNutritionFactsComponent implements OnInit {
  public productName = '';
  public image = '';
  public servingSize = null;
  public calories = null;
  public saturatedFat = null;
  public transFat = null;
  public cholesterol = null;
  public sodium = null;
  public dietaryFiber = null;
  public totalSugars = null;
  public protein = null;
  public vitaminA = null;
  public vitaminC = null;
  public calcium = null;
  public iron = null;

  constructor(private data: NutritionFactsService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  addNutritionFacts(formData) {
    const newNutritionFact = new NutritionFacts(this.productName, this.image, this.servingSize,
      this.calories, this.saturatedFat, this.transFat, this.cholesterol, this.sodium,
      this.dietaryFiber, this.totalSugars, this.protein, this.vitaminA, this.vitaminC, this.calcium, this.iron);
    this.data.addNutritionFacts(newNutritionFact);
    this.toastr.success('Nutrition Facts added successfully!', 'Success!');
    this.router.navigate(['/nutritionfacts']);
  }


}

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

const IMAGE_REGEX = /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/;

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

  public nutritionFactsForm: FormGroup;
  public productNameMessage: string;
  public imageMessage: string;
  public servingSizeMessage: string;
  public caloriesMessage: string;
  public saturatedFatMessage: string;
  public transFatMessage: string;
  public cholesterolMessage: string;
  public sodiumMessage: string;
  public dietaryFiberMessage: string;
  public totalSugarsMessage: string;
  public proteinMessage: string;
  public vitaminAMessage: string;
  public vitaminCMessage: string;
  public calciumMessage: string;
  public ironMessage: string;

  constructor(private data: NutritionFactsService, private router: Router, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit() {
    this.nutritionFactsForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      image: ['', [Validators.required, Validators.pattern(IMAGE_REGEX)]],
      servingSize: ['', [Validators.required, Validators.min(40), Validators.max(100)]],
      calories: ['', [Validators.required, Validators.min(0)]],
      saturatedFat: ['', [Validators.required, Validators.min(0)]],
      transFat: ['', [Validators.required, Validators.min(0)]],
      cholesterol: ['', [Validators.required, Validators.min(0)]],
      sodium: ['', [Validators.required, Validators.min(0)]],
      dietaryFiber: ['', [Validators.required, Validators.min(0)]],
      totalSugars: ['', [Validators.required, Validators.min(0)]],
      protein: ['', [Validators.required, Validators.min(0)]],
      vitaminA: ['', [Validators.required, Validators.min(0)]],
      vitaminC: ['', [Validators.required, Validators.min(0)]],
      calcium: ['', [Validators.required, Validators.min(0)]],
      iron: ['', [Validators.required, Validators.min(0)]]
    });

    const productNameControl = this.nutritionFactsForm.get('productName');
    productNameControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setProductNameMessage(productNameControl);
    });

    const imageControl = this.nutritionFactsForm.get('image');
    imageControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setImageMessage(imageControl);
    });

    const servingSizeControl = this.nutritionFactsForm.get('servingSize');
    servingSizeControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setServingSizeMessage(servingSizeControl);
    });

    const caloriesControl = this.nutritionFactsForm.get('calories');
    caloriesControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setCaloriesMessage(caloriesControl);
    });

    const saturatedFatControl = this.nutritionFactsForm.get('saturatedFat');
    saturatedFatControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setSaturatedFatMessage(saturatedFatControl);
    });

    const transFatControl = this.nutritionFactsForm.get('transFat');
    transFatControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setTransFatMessage(transFatControl);
    });

    const cholesterolControl = this.nutritionFactsForm.get('cholesterol');
    cholesterolControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setCholesterolMessage(cholesterolControl);
    });

    const sodiumControl = this.nutritionFactsForm.get('sodium');
    sodiumControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setSodiumMessage(sodiumControl);
    });

    const dietaryFiberControl = this.nutritionFactsForm.get('dietaryFiber');
    dietaryFiberControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setDietaryFiberMessage(dietaryFiberControl);
    });

    const totalSugarsControl = this.nutritionFactsForm.get('totalSugars');
    totalSugarsControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setTotalSugarsMessage(totalSugarsControl);
    });

    const proteinControl = this.nutritionFactsForm.get('protein');
    proteinControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setProteinMessage(proteinControl);
    });

    const vitaminAControl = this.nutritionFactsForm.get('vitaminA');
    vitaminAControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setVitaminAMessage(vitaminAControl);
    });

    const vitaminCControl = this.nutritionFactsForm.get('vitaminC');
    vitaminCControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setVitaminCMessage(vitaminCControl);
    });

    const calciumControl = this.nutritionFactsForm.get('calcium');
    calciumControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setCalciumMessage(calciumControl);
    });

    const ironControl = this.nutritionFactsForm.get('iron');
    ironControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setIronMessage(ironControl);
    });
  }

  setProductNameMessage(c: AbstractControl): void {
    this.productNameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.productNameMessage = 'Product Name is required!';
      }
      if (c.errors.minlength) {
        this.productNameMessage = 'Product Name should be at least 2 symbols long!';
      }
      if (c.errors.maxlength) {
        this.productNameMessage = 'Product Name should be at maximum 15 symbols long!';
      }
    }
  }

  setImageMessage(c: AbstractControl): void {
    this.imageMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.imageMessage = 'Image is required!';
      }
      if (c.errors.pattern) {
        this.imageMessage = 'Please enter a valid image address!';
      }
    }
  }

  setServingSizeMessage(c: AbstractControl): void {
    this.servingSizeMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.servingSizeMessage = 'Serving Size is required!';
      }
      if (c.errors.min) {
        this.servingSizeMessage = 'Serving Size should be at least 40!';
      }
      if (c.errors.max) {
        this.servingSizeMessage = 'Serving Size should be maximum 100!';
      }
    }
  }

  setCaloriesMessage(c: AbstractControl): void {
    this.caloriesMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.caloriesMessage = 'Calories are required!';
      }
      if (c.errors.min) {
        this.caloriesMessage = 'Calories should be at least 0!';
      }
    }
  }

  setSaturatedFatMessage(c: AbstractControl): void {
    this.saturatedFatMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.saturatedFatMessage = 'Saturated Fat is required!';
      }
      if (c.errors.min) {
        this.saturatedFatMessage = 'Saturated Fat should be at least 0!';
      }
    }
  }

  setTransFatMessage(c: AbstractControl): void {
    this.transFatMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.transFatMessage = 'Trans Fat is required!';
      }
      if (c.errors.min) {
        this.transFatMessage = 'Trans Fat should be at least 0!';
      }
    }
  }

  setCholesterolMessage(c: AbstractControl): void {
    this.cholesterolMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.cholesterolMessage = 'Cholesterol Fat is required!';
      }
      if (c.errors.min) {
        this.cholesterolMessage = 'Cholesterol should be at least 0!';
      }
    }
  }

  setSodiumMessage(c: AbstractControl): void {
    this.sodiumMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.sodiumMessage = 'Sodium is required!';
      }
      if (c.errors.min) {
        this.sodiumMessage = 'Sodium should be at least 0!';
      }
    }
  }

  setDietaryFiberMessage(c: AbstractControl): void {
    this.dietaryFiberMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.dietaryFiberMessage = 'Dietary  Fiber is required!';
      }
      if (c.errors.min) {
        this.dietaryFiberMessage = 'Dietary Fiber should be at least 0!';
      }
    }
  }

  setTotalSugarsMessage(c: AbstractControl): void {
    this.totalSugarsMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.totalSugarsMessage = 'Total Sugars is required!';
      }
      if (c.errors.min) {
        this.totalSugarsMessage = 'Total Sugars should be at least 0!';
      }
    }
  }

  setProteinMessage(c: AbstractControl): void {
    this.proteinMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.proteinMessage = 'Protein is required!';
      }
      if (c.errors.min) {
        this.proteinMessage = 'Protein should be at least 0!';
      }
    }
  }

  setVitaminAMessage(c: AbstractControl): void {
    this.vitaminAMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.vitaminAMessage = 'Vitamin A is required!';
      }
      if (c.errors.min) {
        this.vitaminAMessage = 'Vitamin A should be at least 0!';
      }
    }
  }

  setVitaminCMessage(c: AbstractControl): void {
    this.vitaminCMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.vitaminCMessage = 'Vitamin C is required!';
      }
      if (c.errors.min) {
        this.vitaminCMessage = 'Vitamin C should be at least 0!';
      }
    }
  }

  setCalciumMessage(c: AbstractControl): void {
    this.calciumMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.calciumMessage = 'Calcium is required!';
      }
      if (c.errors.min) {
        this.calciumMessage = 'Calcium should be at least 0!';
      }
    }
  }

  setIronMessage(c: AbstractControl): void {
    this.ironMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.ironMessage = 'Iron is required!';
      }
      if (c.errors.min) {
        this.ironMessage = 'Iron should be at least 0!';
      }
    }
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

import { Component, OnInit } from '@angular/core';
import { NutritionFactsService } from './../../../services/nutrition-facts.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { NutritionFacts } from './../../../models/nutrition-facts';

@Component({
  selector: 'app-nutrition-facts-list',
  templateUrl: './nutrition-facts-list.component.html',
  styleUrls: ['./nutrition-facts-list.component.css']
})
export class NutritionFactsListComponent implements OnInit {
  public fact: NutritionFacts;
  public facts: Array<NutritionFacts>;

  constructor(private data: NutritionFactsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.data.allNutritionFacts.subscribe(data => {
      this.facts = data;
    },
    error => {
      this.toastr.error(error.message, 'Ooops!');
    }
  );
}
  }

}

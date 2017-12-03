import { Component, OnInit } from '@angular/core';

import { FocuseService } from '../../services/focus.service';

@Component({
  selector: 'app-focused',
  templateUrl: './focused.component.html',
  styleUrls: ['./focused.component.css']
})
export class FocusedComponent implements OnInit {
  public pokemonOnFocuse;

  constructor(private focuseService: FocuseService) {
    this.focuseService.pokemonRecieved$
    .subscribe(data => {
      // console.log(data);
      this.focuseService.getPokemonById(data)
      .subscribe(pokemon => {
        this.pokemonOnFocuse = pokemon;
      });
    });
   }

  ngOnInit() {
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { PokeSearchService } from './../../services/poke-search.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit, OnDestroy {
  pokeData;
  sub$;
  targetName = new Subject<any>();

  constructor(private searchService: PokeSearchService) {
    this.searchService.debouncePokemon(this.targetName)
    .subscribe(data => {
      this.pokeData = data;
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  pokemonSearch(e) {
    this.targetName.next(e.target.value);
    // this.targetName = e.target.value;
    // this.sub$ = this.pokeSearchService.getPokemon(this.targetName).subscribe(data => {
    //   // console.log(data);
    //   this.pokeData = data;
    //   // console.log(this.pokeData);
    // });
  }

}

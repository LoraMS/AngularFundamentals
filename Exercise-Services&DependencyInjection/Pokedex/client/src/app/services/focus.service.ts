import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

const baseUrl = 'http://localhost:5000';

@Injectable()
export class FocuseService {

  private pokemonSource = new Subject<any>();

  pokemonRecieved$ = this.pokemonSource.asObservable();

  constructor(private http: HttpClient) { }

  elevatePokemonData(data) {
    this.pokemonSource.next(data);
  }

  getPokemonById(pokemonId) {
    return this.http.get(baseUrl + `/pokemon?pokemonId=${pokemonId}`);
  }

}

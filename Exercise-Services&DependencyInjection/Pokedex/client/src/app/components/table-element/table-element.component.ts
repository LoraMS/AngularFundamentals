import { Component, OnInit, Input } from '@angular/core';

import { FocuseService } from '../../services/focus.service';

@Component({
  selector: 'app-table-element',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.css']
})
export class TableElementComponent implements OnInit {
  @Input() pokemon;
  constructor(private focuseService: FocuseService) { }

  ngOnInit() {
  }

  select(data) {
    this.focuseService.elevatePokemonData(data.id);
  }
}

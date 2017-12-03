import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() article;
  @Output() selectedArticle: EventEmitter<any> = new EventEmitter();
  public date: Date;

  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

  sendData(event) {
    // const target = event.target || event.srcElement || event.currentTarget;
    const target = event.currentTarget;
    const id = target.id;
    // console.log(id);
    this.selectedArticle.emit(id);
  }

}

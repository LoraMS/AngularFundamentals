import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {
  @Input() article;
  @Output() deleteArticleEmitter: EventEmitter<any> = new EventEmitter();

  public isImageShown: boolean;
  public imageButtonText: string;
  public isTextShown: boolean;
  // public articleButtonText: string;
  public date: Date;
  public counter: number;
  public limit: number;

  constructor() {
  }

  ngOnChanges() {
    this.counter = 1;
    this.limit = 0;
    this.isImageShown = false;
    this.isTextShown = false;
    this.imageButtonText = 'Show';
    // this.articleButtonText = 'Read More';
  }

  ngOnInit() {
    this.date = new Date();
  }

  trunc(string) {
    if (string) {
        return string.slice(0, (this.counter - 1) * 250);
      }
  }

  showHideImage(): void {
    if (!this.isImageShown) {
      this.isImageShown = true;
      this.imageButtonText = 'Hide';
    } else {
      this.isImageShown = false;
      this.imageButtonText = 'Show';
    }
  }

  showText(): void {
    this.limit = Math.ceil(this.article.text.length / 250);
      if (this.limit === this.counter) {
        this.isTextShown = true;
      }
      // console.log(this.limit);
      this.counter = this.counter + 1;
      // console.log(this.counter);
      }

  hideText(): void {
      this.isTextShown = false;
      this.counter = 1;
  }

  deleteArticle(id: number) {
    this.deleteArticleEmitter.emit(id);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Article } from '../../../models/article';
import { ArticlesService } from './../../../services/articles.service';

const IMAGE_REGEX = /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/;


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  public title = '';
  public author = '';
  public userId = '';
  public createdOn = null;
  public description = '';
  public image = '';
  public comments = null;

  public articleForm: FormGroup;
  public titleMessage: string;
  public authorMessage: string;
  public descriptionMessage: string;
  public imageMessage: string;

  constructor(private data: ArticlesService, private router: Router, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit() {
    this.articleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(70)]],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(200), Validators.maxLength(1500)]],
      image: ['', [Validators.required, Validators.pattern(IMAGE_REGEX)]]
    });

    const titleControl = this.articleForm.get('title');
    titleControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setTitleMessage(titleControl);
    });

    const authorControl = this.articleForm.get('author');
    authorControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setAuthorMessage(authorControl);
    });

    const descriptionControl = this.articleForm.get('description');
    descriptionControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setDescriptionMessage(descriptionControl);
    });

    const imageControl = this.articleForm.get('image');
    imageControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setImageMessage(imageControl);
    });
  }

  setTitleMessage(c: AbstractControl): void {
    this.titleMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.titleMessage = 'Title is required!';
      }
      if (c.errors.minlength) {
        this.titleMessage = 'Title should be at least 5 symbols long!';
      }
      if (c.errors.maxlength) {
        this.titleMessage = 'Title should be at maximum 70 symbols long!';
      }
    }
  }

  setAuthorMessage(c: AbstractControl): void {
    this.authorMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.authorMessage = 'Author is required!';
      }
      if (c.errors.minlength) {
        this.authorMessage = 'Author should be at least 5 symbols long!';
      }
      if (c.errors.maxlength) {
        this.authorMessage = 'Author should be at maximum 50 symbols long!';
      }
    }
  }

  setDescriptionMessage(c: AbstractControl): void {
    this.descriptionMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.descriptionMessage = 'Description is required!';
      }
      if (c.errors.minlength) {
        this.descriptionMessage = 'Description should be at least 200 symbols long!';
      }
      if (c.errors.maxlength) {
        this.descriptionMessage = 'Description should be at maximum 1500 symbols long!';
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

  addArticle(formData) {
    const newArticle = new Article(this.title, this.author, localStorage.getItem('authkey'),
     Date.now(), this.description, this.image, this.comments);
    this.data.addArticle(newArticle);
    this.toastr.success('Your article was added successfully!', 'Success!');
    this.router.navigate(['/articles']);
  }
}

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

  constructor(private data: ArticlesService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() { }

  addArticle(formData) {
    const newArticle = new Article(this.title, this.author, localStorage.getItem('authkey'),
     Date.now(), this.description, this.image, this.comments);
    this.data.addArticle(newArticle);
    this.toastr.success('Your article was added successfully!', 'Success!');
    this.router.navigate(['/blog']);
  }
}

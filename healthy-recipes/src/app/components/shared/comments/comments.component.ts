import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() path: string;
  @Input() key: string;

  public username: string;
  public date: number;
  public textComment: string;
  public item: any;
  public pathName: string;

  public commentsAddForm: FormGroup;
  public commentMessage: string;

  constructor(
    private toastr: ToastrService,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFireDatabase,
    private fb: FormBuilder
  ) {
    this.textComment = '';
  }

  ngOnInit() {
    this.username = localStorage.getItem('emailkey');
    this.date = Date.now();
    this.pathName = '/' + this.path + '/' + this.key;

    this.route.params.subscribe(params => {
      this.db.object(this.pathName).valueChanges().subscribe((data) => {
        this.item = data;
      });
    });

    this.commentsAddForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]]
    });

    const commentControl = this.commentsAddForm.get('comment');
    commentControl
    .valueChanges
    .debounceTime(1000)
    .subscribe(value => {
      this.setMessage(commentControl);
    });
  }

  setMessage(c: AbstractControl): void {
    this.commentMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      if (c.errors.required) {
        this.commentMessage = 'Comment is required!';
      }
      if (c.errors.minlength) {
        this.commentMessage = 'Comment should be at least 2 symbols long!';
      }
      if (c.errors.maxlength) {
        this.commentMessage = 'Comment should be at maximum 1000 symbols long!';
      }
    }
  }

  onSubmit() {
    const comment = {
      username: this.username,
      date: this.date,
      textComment: this.textComment
    };

    this.item.comments = this.item.comments || [];
    this.item.comments.push(comment);

    this.db.object(this.pathName)
      .update(this.item)
      .then((data) => this.toastr.success('Your comment was added successfully!', 'Success!'))
      .catch((error) => this.toastr.error('You have no permissions to make this changes!', 'Error!'));

    this.textComment = '';

    this.router.navigate([this.pathName]);
  }

  isAuthenticated() {
    return this.auth.isAuthenticated;
  }

}

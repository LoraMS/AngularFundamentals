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

  constructor(
    private toastr: ToastrService,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFireDatabase
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
  }

  onSubmit(formData) {
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

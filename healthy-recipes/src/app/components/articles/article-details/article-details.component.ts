import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ArticlesService } from './../../../services/articles.service';
import { UserService } from './../../../services/user.service';
import { Article } from './../../../models/article';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  public article: Article;
  public commentsLength: number;
  public currentCommentsLength: number;
  public articleKey: string;
  public path = 'articles';
  public role: string;

  constructor(
    private data: ArticlesService,
    private userData: UserService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      const id = params.id;
      this.articleKey = id;
      this.data.getAtricleById(id).valueChanges().subscribe(data => {
        this.article = data;
        if (data.comments) {
            this.commentsLength = this.article.comments.length;
        }
        this.currentCommentsLength = this.commentsLength || 0;
      });
    });

    this.userData.getUserById(localStorage.getItem('authkey')).valueChanges()
    .subscribe(u => {
    this.role = u['role'];
    });
  }

  isAuthenticated() {
    return this.auth.isAuthenticated;
  }

  isAuthor(authorId: string) {
    if (this.auth.currentUserId === authorId) {
      return true;
    }
    return false;
  }

  remove() {
    const articleKey = this.route.snapshot.params['id'];
    this.data.removeArticle(articleKey);

    this.toastr.success('Your article was removed successfully!', 'Success!');

    this.router.navigate(['articles']);
  }

}

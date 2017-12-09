import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';

import { Article } from './../models/article';

@Injectable()
export class ArticlesService {
    private dbPath = '/articles';

    article: AngularFireObject<Article> = null;
    articlesRef: AngularFireList<Article[]> = null;
    articles: Observable<any[]>;

    constructor(private db: AngularFireDatabase, private toastr: ToastrService, private router: Router) {
        this.articlesRef = db.list('/articles');
        // Use snapshotChanges().map() to store the key
        this.articles = this.articlesRef.snapshotChanges().map(changes => {
            return changes.map(c => {
                return { key: c.payload.key, ...c.payload.val() };
            });
        });
    }

    getAtricleById(articleKey: string): AngularFireObject<Article> {
        return this.db.object(`${this.dbPath}/${articleKey}`);
    }

    addArticle(article: Article): void {
        const articles = this.db.list(`${this.dbPath}`);
        articles.push(article);
    }
}

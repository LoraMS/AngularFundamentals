import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageNotFoundComponent } from './page.not.found/page.not.found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
    ],
    declarations: [
        NavigationComponent,
        FooterComponent,
        PageNotFoundComponent,
        CommentsComponent
],
    exports: [
        NavigationComponent,
        FooterComponent,
        PageNotFoundComponent,
        CommentsComponent
    ]
})
export class SharedModule { }


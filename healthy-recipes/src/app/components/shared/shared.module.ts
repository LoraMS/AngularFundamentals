import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page.not.found/page.not.found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavigationComponent,
        FooterComponent,
        PageNotFoundComponent
    ],
    exports: [
        NavigationComponent,
        FooterComponent,
        PageNotFoundComponent
    ]
})
export class SharedModule { }


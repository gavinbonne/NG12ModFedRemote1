import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';
import { RouterModule } from '@angular/router';
import { TILE_ROUTES } from './billing.routes';
import { InfoComponent } from './info/info.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TILE_ROUTES)
    ],
    declarations: [
        BillingComponent,
        InfoComponent,
        ReviewComponent
    ]
})
export class BillingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyTileComponent } from './survey-tile.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        SurveyTileComponent
    ]
})
export class SurveyTileModule { }

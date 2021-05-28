import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HealthTrackerComponent } from './health-tracker/health-tracker.component';
import { SurveyTileModule } from './survey-tile/survey-tile.module';
import { TileModule } from './tile/tile.module';

@NgModule({
    imports: [
        BrowserModule,
        TileModule,
        RouterModule.forRoot(APP_ROUTES),
        SurveyTileModule
    ],
    declarations: [
        AppComponent,
        HealthTrackerComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

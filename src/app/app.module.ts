import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HealthTrackerComponent } from './health-tracker/health-tracker.component';
import { SurveyTileModule } from './survey-tile/survey-tile.module';
import { BillingModule } from './billing/billing.module';
import { ArticleTileComponent } from './article-tile/article-tile.component';

@NgModule({
    imports: [
        BrowserModule,
        BillingModule,
        RouterModule.forRoot(APP_ROUTES),
        SurveyTileModule
    ],
    declarations: [
        AppComponent,
        ArticleTileComponent,
        HealthTrackerComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

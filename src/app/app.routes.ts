import { Routes } from '@angular/router';
import { ArticleTileComponent } from './article-tile/article-tile.component';
import { HealthTrackerComponent } from './health-tracker/health-tracker.component';
import { SurveyTileComponent } from './survey-tile/survey-tile.component';
import { BillingComponent } from './billing/billing.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'billing', pathMatch: 'full'},
    { path: 'billing', component: BillingComponent, pathMatch: 'full'},
    { path: 'article-tile', component: ArticleTileComponent, pathMatch: 'full'},
    { path: 'survey-tile', component: SurveyTileComponent, pathMatch: 'full'},
    { path: 'health-tracker', component: HealthTrackerComponent, pathMatch: 'full'},
    { path: '**', redirectTo: 'billing', pathMatch: 'full'}
];
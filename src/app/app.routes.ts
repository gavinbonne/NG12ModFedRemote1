import { Routes } from '@angular/router';
import { ArticleTileComponent } from './article-tile/article-tile.component';
import { HealthTrackerComponent } from './health-tracker/health-tracker.component';
import { SurveyTileComponent } from './survey-tile/survey-tile.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'billing', pathMatch: 'full'},
    {
        path: 'billing',
        loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule)
    },
    { path: 'article-tile', component: ArticleTileComponent, pathMatch: 'full'},
    { path: 'survey-tile', component: SurveyTileComponent, pathMatch: 'full'},
    { path: 'health-tracker', component: HealthTrackerComponent, pathMatch: 'full'},
    { path: '**', redirectTo: 'billing', pathMatch: 'full'}
];
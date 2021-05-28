import { Routes } from '@angular/router';
import { HealthTrackerComponent } from './health-tracker/health-tracker.component';
import { SurveyTileComponent } from './survey-tile/survey-tile.component';
import { TileComponent } from './tile/tile.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'tile', pathMatch: 'full'},
    { path: 'tile', component: TileComponent, pathMatch: 'full'},
    { path: 'survey-tile', component: SurveyTileComponent, pathMatch: 'full'},
    { path: 'health-tracker', component: HealthTrackerComponent, pathMatch: 'full'},
    { path: '**', redirectTo: 'tile', pathMatch: 'full'}
];
import { Routes } from '@angular/router';
import { TileComponent } from './tile/tile.component';

export const APP_ROUTES: Routes = [
    { path: '', component: TileComponent, pathMatch: 'full'}
];
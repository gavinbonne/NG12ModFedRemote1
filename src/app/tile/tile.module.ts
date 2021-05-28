import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile.component';
import { RouterModule } from '@angular/router';
import { TILE_ROUTES } from './tile.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TILE_ROUTES)
    ],
    declarations: [
        TileComponent
    ]
})
export class TileModule { }

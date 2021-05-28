import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { TileModule } from './tile/tile.module';

@NgModule({
    imports: [
        BrowserModule,
        TileModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

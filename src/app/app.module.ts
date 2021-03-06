import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { StaticAngularComponent } from './static-angular/static-angular.component';
import { AngularTileModule } from './angular-tile/angular-tile.module';
import { ParentModule } from './parent/parent.module';

@NgModule({
    imports: [
        BrowserModule,
        ParentModule,
        RouterModule.forRoot(APP_ROUTES),
        AngularTileModule
    ],
    declarations: [
        AppComponent,
        StaticAngularComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

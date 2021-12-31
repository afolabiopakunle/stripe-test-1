import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMatsModule } from './ng-mats/ng-mats.module';
import { ArtCardComponent } from './art-card/art-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StripeModule } from "stripe-angular"

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
    NgMatsModule,
    StripeModule.forRoot('sk_test_51KCY9mE56BwLuZepuJHgpUhzXAwzUBQp2eRoJcZI8NllZee7mf7VBh8ouoWxnFfb1XOCX2D11iy1ceUHNgvgFD0E00gEuLncKx')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

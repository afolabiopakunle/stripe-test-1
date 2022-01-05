import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMatsModule } from './ng-mats/ng-mats.module';
import { ArtCardComponent } from './art-card/art-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { StripeCancelComponent } from './stripe-cancel/stripe-cancel.component';
import { StripeSuccessComponent } from './stripe-success/stripe-success.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtCardComponent,
    HomeListComponent,
    StripeCancelComponent,
    StripeSuccessComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgMatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

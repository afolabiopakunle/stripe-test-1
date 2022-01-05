import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { HomeListComponent } from "./home-list/home-list.component";
import { StripeCancelComponent } from "./stripe-cancel/stripe-cancel.component";
import { StripeSuccessComponent } from "./stripe-success/stripe-success.component";

const routes: Routes = [
  {path: '', component: HomeListComponent,},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'success', component: StripeSuccessComponent},
  {path: 'cancel', component: StripeCancelComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

import { Component, Input, OnInit } from '@angular/core';
import { ArtCard } from '../art-card.model';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.css']
})
export class ArtCardComponent implements OnInit {

  @Input() artCard!: ArtCard;

  paymentHandler:any = null;

  constructor() { }

  ngOnInit() {
    this.invokeStripe();
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KCY9mE56BwLuZepj0kzE3n8BLfLCfKhcav75HeIIpISFKe2xl1XCgSatNvKXRIogrhT0WMbnBg7nakDynqLOFSU00QcLgdt28',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });

    paymentHandler.open({
      name: 'Afolabi\'s Stripe ArtWorld',
      description: 'Get yourself an artwork',
      amount: amount * 100
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KCY9mE56BwLuZepj0kzE3n8BLfLCfKhcav75HeIIpISFKe2xl1XCgSatNvKXRIogrhT0WMbnBg7nakDynqLOFSU00QcLgdt28',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

}

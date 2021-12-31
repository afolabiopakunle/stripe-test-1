import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.css']
})
export class ArtCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KCY9mE56BwLuZepj0kzE3n8BLfLCfKhcav75HeIIpISFKe2xl1XCgSatNvKXRIogrhT0WMbnBg7nakDynqLOFSU00QcLgdt28',
      locale: 'auto',
      token: function(stripeToken: any) {
        console.log(stripeToken.card);
        alert('Stripe token generated!');
      },
    });

    paymentHandler.open({
      name: 'Artwork Africa',
      description: 'Just checking',
      amount: amount * 100,
    })


  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe.script';
      script.type = 'text/javascript';
      script.src = '';
      window.document.body.appendChild(script);
    }
  }
}

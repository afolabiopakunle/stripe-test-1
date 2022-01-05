import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async pay(): Promise<void> {
    const payment = {
      name: 'Iphone',
      currency: 'usd',
      amount: 998,
      quantity: '1',
      cancleUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success'
    }

    const stripe = await this.stripePromise;

    this.http.post(`${environment.severUrl}/payment`, payment)
    .subscribe((data: any) => {
      stripe?.redirectToCheckout({
        sessionId: data.id
      })
    })
  }

}

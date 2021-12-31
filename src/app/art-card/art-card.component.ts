import { Component, OnInit } from '@angular/core';
import { StripeScriptTag } from "stripe-angular"


@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.css']
})
export class ArtCardComponent implements OnInit {

  paymentHandler: any = null

  constructor(private stripeScriptTag: StripeScriptTag) {
    if (!this.stripeScriptTag.StripeInstance) {
      this.stripeScriptTag.setPublishableKey('sk_test_51KCY9mE56BwLuZepuJHgpUhzXAwzUBQp2eRoJcZI8NllZee7mf7VBh8ouoWxnFfb1XOCX2D11iy1ceUHNgvgFD0E00gEuLncKx');
    }
  }

  ngOnInit(): void {

  }



}

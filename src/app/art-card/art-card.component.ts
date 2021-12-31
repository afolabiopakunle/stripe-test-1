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

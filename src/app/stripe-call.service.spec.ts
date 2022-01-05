import { TestBed } from '@angular/core/testing';

import { StripeCallService } from './stripe-call.service';

describe('StripeCallService', () => {
  let service: StripeCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StripeCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

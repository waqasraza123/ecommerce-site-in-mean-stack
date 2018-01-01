import { TestBed, inject } from '@angular/core/testing';

import { CryptoCurrencyDataService } from './crypto-currency-data.service';

describe('CryptoCurrencyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoCurrencyDataService]
    });
  });

  it('should be created', inject([CryptoCurrencyDataService], (service: CryptoCurrencyDataService) => {
    expect(service).toBeTruthy();
  }));
});

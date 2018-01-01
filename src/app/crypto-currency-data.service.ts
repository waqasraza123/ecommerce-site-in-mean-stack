import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
// import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class CryptoCurrencyDataService {

  data: any;
  constructor(private _http: Http) { }

  getprices() {
    var d = new Date();
    var nonce = d.getTime();
    let headers = new Headers({'Access-Key' : 'hA8tyfpwGzHdqBL4aPDiSZ'});
    const options = new RequestOptions({ headers:headers });
    let post_params = {
      'order_id'          : 'ORDER-1412759368',
      'price'             : 1050.99,
      'currency'          : 'USD',
      'receive_currency'  : 'EUR',
      'description'       : 'Apple Iphone 6'
    };

    let response = this._http.post('https://api-sandbox.coingate.com/v1/orders',post_params,options);
    console.log(response);

    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD,EUR')
    .map( data => this.data=data );
  }

}

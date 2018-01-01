import { Component, OnInit } from '@angular/core';
import { CryptoCurrencyDataService } from '../crypto-currency-data.service';

@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.scss']
})
export class BlockChainComponent implements OnInit {

  objectKeys = Object.keys;
  cryptoData: any;
  constructor(private _CryptoCurrencyDataService: CryptoCurrencyDataService) { }

  ngOnInit() {
    this._CryptoCurrencyDataService.getprices().subscribe( res => { this.cryptoData=res.json(); console.log(res.json()); });
  }

}

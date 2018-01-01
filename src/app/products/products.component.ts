import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('/products').subscribe( data => this.products=data );
  }

}

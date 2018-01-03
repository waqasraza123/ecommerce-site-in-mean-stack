import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;
  constructor(private _productService: ProductService) {
   }
  ngOnInit() {
   this._productService.allproducts().subscribe(data => this.products=data );
  }

}

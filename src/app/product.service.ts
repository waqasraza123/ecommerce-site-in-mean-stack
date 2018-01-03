import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ProductsComponent } from '../app/products/products.component';

class product {
  constructor(public name: string,
              public description: string,
              public image: string,
              public price: number,
              public category_id: number) {
  }
}


@Injectable()
export class ProductService {

  products:any;
  constructor(private http: Http) {
   }

   allproducts() {
    return this.http.get('/api/product/')
    .map(res => {
      return res.json().map(item => {
        return new product(
            item.p_name,
            item.p_des,
            item.p_image,
            item.p_price,
            item.category_id
        );
      });
    });
   }

}

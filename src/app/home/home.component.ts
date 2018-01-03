import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // products = <any>[];
  constructor() { }

  ngOnInit() {
    // this._http.get('/api/product/').subscribe( data => this.products=data );
    // console.log(this.products);
  }

}

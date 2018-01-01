import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss']
})
export class AppheaderComponent implements OnInit {

  searchText: string;

  constructor(private _itunes:SearchService) { }

  ngOnInit() {
  }
   doSearch(term:string){
    this._itunes.search(term);
   }

}

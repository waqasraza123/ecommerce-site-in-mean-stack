import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppComponent } from './app.component';
import { HttpModule, Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Rx';

class SearchItem {
  constructor(public track: string,
              public artist: string,
              public link: string,
              public thumbnail: string,
              public artistId: string) {
  }
}


@Injectable()
export class SearchService {
apiRoot:string = 'https://itunes.apple.com/search';
  constructor(private http: Http) {

   }
   search(term: string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL)
        .map(res => {
          return res.json().results.map(item => {
            return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
            );
          });
        });
  }
}

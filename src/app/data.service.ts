import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {
private data = new BehaviorSubject<any>(['Item 1','Item 2','Item 3']);
Pdata=this.data.asObservable();
  constructor() { }

}

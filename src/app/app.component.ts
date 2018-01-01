import { Component,OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

interface User {
  fullname: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  private loading: boolean = false;
  private results: Observable<any[]>;
  private searchField: FormControl;
  UsersCol: AngularFirestoreCollection<User>;
  Users: Observable<User[]>;
  constructor(private _itunes:SearchService,private afs: AngularFirestore) {

  }
  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .do(_ => this.loading = true)
    .switchMap(term => this._itunes.search(term))
    .do(_ => this.loading = false);
    this.UsersCol = this.afs.collection('Users');
    this.Users = this.UsersCol.valueChanges();
  }


  

}

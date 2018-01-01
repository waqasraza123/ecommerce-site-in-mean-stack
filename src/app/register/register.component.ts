import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  state: string = '';
  error: any;
  constructor(public afs: AngularFirestore,private router: Router) { }

  ngOnInit() {
  }
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.afs.collection('Users').add({
        username:formData.value.username,
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/dashboard'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}

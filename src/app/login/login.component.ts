import { Component, OnInit } from '@angular/core';
import { AngularFireAuth,AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  state: string = '';
  error: any;
  constructor(private afs: AngularFirestore ,private router: Router) { 
    // this.af.auth.onAuthStateChanged(auth=>{
    //   if(auth){
    //     this.router.navigateByUrl('dashboard');
    //   }
    // });
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);    
      let record = this.afs.collection('Users',
      (ref) => ref.where('email','==',formData.value.email).where('password','==',formData.value.password));
      record.ref.get().then((success) => {
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

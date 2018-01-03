import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { SearchService } from './search.service';
import { ProductService } from './product.service';
import { CryptoCurrencyDataService } from './crypto-currency-data.service';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { SongItemComponent } from './song-item/song-item.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardUserCardComponent } from './dashboard-user-card/dashboard-user-card.component';
import { DashboardLatestProjectsComponent } from './dashboard-latest-projects/dashboard-latest-projects.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardInboxComponent } from './dashboard-inbox/dashboard-inbox.component';
import { DashboardLeftSideMenuComponent } from './dashboard-left-side-menu/dashboard-left-side-menu.component';
import { LoginComponent } from './login/login.component';
import { BlockChainComponent } from './block-chain/block-chain.component';
import { ProductsComponent } from './products/products.component';

// Paste in your FireBase credentials
var firebaseConfig = {
    apiKey: "AIzaSyArNYjgU3Upztpn7zbpryeVke9OJJT1NXM",
    authDomain: "ng5project-3d13b.firebaseapp.com",
    databaseURL: "https://ng5project-3d13b.firebaseio.com",
    projectId: "ng5project-3d13b",
    storageBucket: "",
    messagingSenderId: "862005819034"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AppheaderComponent,
    SongItemComponent,
    SignupComponent,
    RegisterComponent,
    DashboardComponent,
    DashboardUserCardComponent,
    DashboardLatestProjectsComponent,
    DashboardFooterComponent,
    DashboardInboxComponent,
    DashboardLeftSideMenuComponent,
    LoginComponent,
    BlockChainComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule,
    RouterModule.forRoot(routes)

  ],
  providers: [DataService,SearchService,CryptoCurrencyDataService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

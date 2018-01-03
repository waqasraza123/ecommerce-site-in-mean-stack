import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';
import { BlockChainComponent } from './block-chain/block-chain.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },{
    path: 'login', component: LoginComponent
  },{
    path: 'register', component: RegisterComponent
  },{
    path: 'home', component: HomeComponent
  },{
    path: 'about/:id', component: AboutComponent
  },{
    path: 'signup', component: SignupComponent
  },{
    path: 'dashboard', component: DashboardComponent
  },{
    path: 'cryptocurrency-api', component: BlockChainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

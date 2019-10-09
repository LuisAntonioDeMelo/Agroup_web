import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component:IntroComponent},
  {path:'login',component:LoginComponent,
    children:[
      {path:'',component:SignInComponent},
      {path:'signIn',component:SignInComponent,pathMatch:'full'},
      {path:'signUp',component:SignUpComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

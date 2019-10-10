import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { AmostraAgroComponent } from './dashboard/amostra-agro/amostra-agro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficosComponent } from './dashboard/graficos/graficos.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    AmostraAgroComponent,
    DashboardComponent,
    GraficosComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

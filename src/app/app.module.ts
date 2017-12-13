import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './routing/routes';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthService } from "./services/auth/auth.service";
import { CompanyService } from "./services/company/company.service";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { AppService } from "./services/app/app.service";
import { CompanyComponent } from './components/company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule

  ],
  providers: [AuthService,CompanyService,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

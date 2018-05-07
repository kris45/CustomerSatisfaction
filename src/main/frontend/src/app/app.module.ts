import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './content/products/products.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./shared/content.service";
import { ChartComponent } from './content/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    ContentComponent,
    FooterComponent,
    ContactUsComponent,
    ProductsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {Router,RouterLink,RouterModule} from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
//import { AppRoutingModule } from './app-routing.module';

 
 
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    //AppRoutingModule
   
  ],
  providers: [],
  //sequence of loading the components
  bootstrap: [AppComponent]
})
export class AppModule { }
 
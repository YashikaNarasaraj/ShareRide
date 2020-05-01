import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path : '', component : PublicComponent, children : [
  { path : '', component : LoginComponent}, 
  { path : 'registration', component : RegistrationComponent}]},

  { path : 'secure', component : SecureComponent, children : [
    {path : '', component : HomeComponent},
    {path : 'postride', component : PostrideComponent},
    {path : 'findride', component : FindrideComponent},
    {path : 'requestRide', component : RequestRideComponent},
    {path : 'rideRequests', component : RideRequestsComponent}]}
]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { RegistrationComponent } from './public/registration/registration.component';
import { TopbarComponent } from './secure/topbar/topbar.component';
import { MenubarComponent } from './secure/menubar/menubar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { PostrideComponent } from './secure/postride/postride.component';
import { FindrideComponent } from './secure/findride/findride.component';
import { RequestRideComponent } from './secure/request-ride/request-ride.component';
import { RideRequestsComponent } from './secure/ride-requests/ride-requests.component';
import { HomeComponent } from './secure/topbar/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TopbarComponent,
    MenubarComponent,
    PublicComponent,
    SecureComponent,
    PostrideComponent,
    FindrideComponent,
    RequestRideComponent,
    RideRequestsComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

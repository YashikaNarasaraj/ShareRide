import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const appRoutes: Routes = [
    { path : '', component : SecureComponent, children : [
        { path : '', component : AboutUsComponent}, 
        {path : 'postride', component : PostrideComponent},
        {path : 'findride', component : FindrideComponent},
        {path : 'requestRide', component : RequestRideComponent},
        {path : 'rideRequests', component : RideRequestsComponent},
        {path : 'AboutUs', component : AboutUsComponent},
        {path : 'profile', component : ProfileComponent}]}
]


import { SecureComponent } from './secure.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PostrideComponent } from './postride/postride.component';
import { FindrideComponent } from './findride/findride.component';
import { RequestRideComponent } from './request-ride/request-ride.component';
import { RideRequestsComponent } from './ride-requests/ride-requests.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    SecureComponent,
    TopbarComponent,
    HomeComponent,
    MenubarComponent,
    PostrideComponent,
    FindrideComponent,
    RequestRideComponent,
    RideRequestsComponent,
    AboutUsComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class SecureModule { }
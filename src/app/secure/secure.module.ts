import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RidesService } from './services/rides.service';
import { RequestsService } from './services/requests.service';


const appRoutes: Routes = [
    { path : '', component : SecureComponent, children : [
        { path : '', component : AboutUsComponent}, 
        {path : 'postride', component : PostrideComponent},
        {path : 'requestRide', component : RequestRideComponent},
        {path : 'AboutUs', component : AboutUsComponent},
        {path : 'profile', component : ProfileComponent},
        {path : 'trips', component : TripsComponent, children :[
          {path : '', component : FindrideComponent},
          {path : 'rideRequests', component : RideRequestsComponent},
          {path : 'driverdetails/:id', component : DriverDetailsComponent},
          {path : 'passengerdetails/:id', component : PassengerDetailsComponent}
        ]}
    ]}
]


import { SecureComponent } from './secure.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PostrideComponent } from './postride/postride.component';
import { FindrideComponent } from './trips/findride/findride.component';
import { RequestRideComponent } from './request-ride/request-ride.component';
import { RideRequestsComponent } from './trips/ride-requests/ride-requests.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { TripsComponent } from './trips/trips.component';
import { FindItemComponent } from './trips/findride/find-item/find-item.component';
import { RequestItemComponent } from './trips/ride-requests/request-item/request-item.component';
import { DriverDetailsComponent } from './trips/driver-details/driver-details.component';
import { PassengerDetailsComponent } from './trips/passenger-details/passenger-details.component';



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
    TripsComponent,
    FindItemComponent,
    RequestItemComponent,
    DriverDetailsComponent,
    PassengerDetailsComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [RidesService, RequestsService],
})
export class SecureModule { }

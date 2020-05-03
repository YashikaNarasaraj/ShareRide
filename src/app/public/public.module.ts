import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  { path : '', component : PublicComponent, children : [
  { path : '', component : LoginComponent}, 
  { path : 'registration', component : RegistrationComponent}]}
]


import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [PublicComponent]
})
export class PublicModule { }

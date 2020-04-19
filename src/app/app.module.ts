import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path : '', component : PublicComponent, children : [
  { path : '', component : LoginComponent}, 
  { path : 'registration', component : RegistrationComponent}]},

  { path : 'secure', component : SecureComponent},
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TopbarComponent,
    MenubarComponent,
    PublicComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

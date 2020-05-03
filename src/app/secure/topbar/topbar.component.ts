import { Component } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '.app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

    welcome = 'Welcome';
    username : string;
    faCog = faCog;
    faCoffee = faCoffee;
    faUser = faUserCircle;
 
    getUsername() {
      this.username = 'Fname Lname';
 
      return this.username;
    }
  
}

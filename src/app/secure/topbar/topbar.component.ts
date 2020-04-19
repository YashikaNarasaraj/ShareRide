import { Component } from '@angular/core';

@Component({
  selector: '.app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

    welcome = 'Welcome';
    username;
 
    getUsername() {
      this.username = 'Fname Lname';
 
      return this.username;
    }
  
}

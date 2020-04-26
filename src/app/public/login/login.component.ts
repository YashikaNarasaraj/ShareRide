import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('f') frm : NgForm;
  constructor(private router : Router){}

  loginUser(){
    if(this.frm.value.em=="user@gmail.com" && this.frm.value.pwd=="pwd"){
      this.router.navigate(['/secure']);
    }else{
      alert('Please enter valid credentials');
    }
}
 
}

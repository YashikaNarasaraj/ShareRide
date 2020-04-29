import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  registrationForm : FormGroup;
  isValid : boolean;

  ngOnInit(){
    this.registrationForm = new FormGroup({
      'fname' : new FormControl(null, Validators.required),
      'lname' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'pwd' : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'conf_pwd' : new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  registerUser(){
    console.log(this.registrationForm);
    console.log(this.registrationForm.value.lname);
  }

  isValidPassword(param : any){

      if(param == "required"){
        this.isValid = (this.registrationForm.controls.pwd.errors && 
          this.registrationForm.controls.pwd.errors.required && 
          this.registrationForm.controls.pwd.touched);
      }else if( param == "length"){
        this.isValid = (this.registrationForm.controls.pwd.errors &&
          this.registrationForm.controls.pwd.errors.minlength)
        }
      
      return this.isValid;
  }

  isValidPassword2(param : any){
    
    if(param == "required"){
      this.isValid = (this.registrationForm.controls.conf_pwd.errors && 
        this.registrationForm.controls.conf_pwd.errors.required && 
        this.registrationForm.controls.conf_pwd.touched)
    }else if( param == "length"){
      this.isValid = (this.registrationForm.controls.conf_pwd.errors &&
        this.registrationForm.controls.conf_pwd.errors.minlength)
    }else if( param == "match" &&
              (this.registrationForm.controls.conf_pwd.errors == null) && 
              (this.registrationForm.value.pwd != this.registrationForm.value.conf_pwd)){
                  this.isValid = true;
              }
      else{
        this.isValid = false;
      }

    return this.isValid;
  }
  
}

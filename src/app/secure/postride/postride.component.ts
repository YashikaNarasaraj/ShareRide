import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RidesService } from '../services/rides.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postride',
  templateUrl: './postride.component.html',
  styleUrls: ['./postride.component.css']
})
export class PostrideComponent implements OnInit {
  
  submit_val : boolean = false;
  rides : any;
  id : number;

  postrideForm : FormGroup;

  ngOnInit(){
    this.postrideForm = new FormGroup({
      'source' : new FormControl(null),
      'destination' : new FormControl(null),
      'model' : new FormControl(null, Validators.required),
      'car_num' : new FormControl(null, Validators.required),
      'price' : new FormControl(null, Validators.required),
      'seats' : new FormControl(null, Validators.required),
      'traveldate' : new FormControl(null, Validators.required),
      'traveltime' : new FormControl(null, Validators.required),
      'name' : new FormControl(null, Validators.required),
      'ph_num' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.required),
      'birthday' : new FormControl(null, Validators.required),
      'exp' : new FormControl(null, Validators.required),
      'age' : new FormControl(null, Validators.required),
      'gender' : new FormControl(null, Validators.required),

    })
  }

    constructor(private router : Router, public rideService : RidesService){ 
  }
    

  addNewItem() {
    
    console.log(this.postrideForm.value.destination);


    /*this.rideService.mon_tor.push({ id : 9, name: this.rideService.serv_name, age: this.rideService.serv_age , 
      gender : this.rideService.serv_gender, source: this.rideService.serv_source, Destination : this.rideService.serv_destination, 
      CarModel : this.rideService.serv_carModel, CarNum : this.rideService.serv_carNum, exp : this.rideService.serv_exp, 
      price: this.rideService.serv_price, seats: this.rideService.serv_seats, img : "assets/cars/car9.jpg", rating : 5, 
      date : this.rideService.serv_date, Time : this.rideService.serv_time, Phone : this.rideService.serv_phone });*/
      if(this.postrideForm.value.destination=="Toronto"){

      
      this.rideService.mon_tor.push({ id : (this.rideService.torLength)++ , name: this.postrideForm.value.name , age: this.postrideForm.value.age , 
      gender : this.postrideForm.value.gender, source: this.postrideForm.value.source, Destination : this.postrideForm.value.destination, 
      CarModel : this.postrideForm.value.model, CarNum : this.postrideForm.value.car_num, exp : this.postrideForm.value.exp, 
      price: this.postrideForm.value.price, seats: this.postrideForm.value.seats, img : "assets/cars/car3.jpg", rating : 5, 
      date : this.postrideForm.value.traveldate, Time : this.postrideForm.value.traveltime, Phone : this.postrideForm.value.ph_num})
      }else if(this.postrideForm.value.destination=="Halifax"){
        
        this.rideService.mon_hal.push({ id : (this.rideService.halLength)++ , name: this.postrideForm.value.name , age: this.postrideForm.value.age , 
        gender : this.postrideForm.value.gender, source: this.postrideForm.value.source, Destination : this.postrideForm.value.destination, 
        CarModel : this.postrideForm.value.model, CarNum : this.postrideForm.value.car_num, exp : this.postrideForm.value.exp, 
        price: this.postrideForm.value.price, seats: this.postrideForm.value.seats, img : "assets/cars/car3.jpg", rating : 5, 
        date : this.postrideForm.value.traveldate, Time : this.postrideForm.value.traveltime, Phone : this.postrideForm.value.ph_num})
        }else if(this.postrideForm.value.destination=="Brampton"){
        
          this.rideService.mon_bra.push({ id : (this.rideService.braLength)++ , name: this.postrideForm.value.name , age: this.postrideForm.value.age , 
          gender : this.postrideForm.value.gender, source: this.postrideForm.value.source, Destination : this.postrideForm.value.destination, 
          CarModel : this.postrideForm.value.model, CarNum : this.postrideForm.value.car_num, exp : this.postrideForm.value.exp, 
          price: this.postrideForm.value.price, seats: this.postrideForm.value.seats, img : "assets/cars/car3.jpg", rating : 5, 
          date : this.postrideForm.value.traveldate, Time : this.postrideForm.value.traveltime, Phone : this.postrideForm.value.ph_num})
          }
        
      this.router.navigate(['/secure/trips']);
}

}

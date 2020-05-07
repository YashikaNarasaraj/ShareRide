import { Component, OnInit } from '@angular/core';
import { RidesService } from '../services/rides.service';

@Component({
  selector: 'app-postride',
  templateUrl: './postride.component.html',
  styleUrls: ['./postride.component.css']
})
export class PostrideComponent implements OnInit {

  constructor(public rideService : RidesService){

  }
  ngOnInit(): void {
  }

}

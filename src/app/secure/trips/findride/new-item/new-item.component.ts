import { Component, OnInit } from '@angular/core';
import { RidesService } from 'src/app/secure/services/rides.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  faStar = faStar;

  constructor(public rideService : RidesService) { }

  ngOnInit(): void {
  }

}

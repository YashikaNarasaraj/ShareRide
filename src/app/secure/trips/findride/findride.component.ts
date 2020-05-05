import { Component, OnInit } from '@angular/core';
import { RidesService } from '../../services/rides.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-findride',
  templateUrl: './findride.component.html',
  styleUrls: ['./findride.component.css']
})
export class FindrideComponent implements OnInit  {

  faStar = faStar;
  faDollar = faDollarSign;

  mont_toro : any;
  mont_hali : any;
  mont_bram : any;

  constructor(public rideService : RidesService){
    this.mont_toro = rideService.mon_tor;
    this.mont_hali = rideService.mon_hal;
    this.mont_bram = rideService.mon_bra;
 }
 ngOnInit() {
}

}

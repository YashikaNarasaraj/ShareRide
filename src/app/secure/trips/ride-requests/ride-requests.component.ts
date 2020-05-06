import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ride-requests',
  templateUrl: './ride-requests.component.html',
  styleUrls: ['./ride-requests.component.css']
})
export class RideRequestsComponent implements OnInit {

  faStar = faStar;
  faDollar = faDollarSign;

  mont_toro : any;
  mont_hali : any;
  mont_bram : any;

  constructor(public requestService : RequestsService){
    this.mont_toro = requestService.mon_tor;
    this.mont_hali = requestService.mon_hal;
    this.mont_bram = requestService.mon_bra;
 }
 ngOnInit() {
}

}

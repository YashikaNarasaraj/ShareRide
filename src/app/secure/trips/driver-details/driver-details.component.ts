import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { RidesService } from '../../services/rides.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  
  route : any;
  tripList : any;
  selectedId: number;

  constructor(private rout: ActivatedRoute, private rideService : RidesService) {}

  ngOnInit() {

    this.selectedId = this.rout.snapshot.params['id']

    if(this.rideService.routes == "mon_tor"){
      this.tripList = this.rideService.mon_tor;
    }else if(this.rideService.routes == "mon_hal"){
      this.tripList = this.rideService.mon_hal;
    }else if(this.rideService.routes == "mon_bra"){
      this.tripList = this.rideService.mon_bra;
    }

    for(let i =0; i< this.tripList.length; i++){
      if(this.selectedId == this.tripList[i].id){
        this.route = this.tripList[i];
      }
    }
  }

}

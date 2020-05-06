import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  request : any;
  requestList : any;
  selectedId: number;

  constructor(private rout: ActivatedRoute, private requestsService : RequestsService) {}

  ngOnInit() {

    this.selectedId = this.rout.snapshot.params['id']

    if(this.requestsService.requests_serv == "mon_tor"){
      this.requestList = this.requestsService.mon_tor;
    }else if(this.requestsService.requests_serv == "mon_hal"){
      this.requestList = this.requestsService.mon_hal;
    }else if(this.requestsService.requests_serv == "mon_bra"){
      this.requestList = this.requestsService.mon_bra;
    }

    for(let i =0; i< this.requestList.length; i++){
      if(this.selectedId == this.requestList[i].id){
        this.request = this.requestList[i];
      }
    }
  }


}

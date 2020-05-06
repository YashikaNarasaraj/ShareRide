import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.css']
})
export class RequestItemComponent{

  isDisabled;
  faStar = faStar;
  constructor(){}

  @Input() request : any;

  checkAvailability(){
        this.isDisabled = true;
        return this.isDisabled;
  }

  book(b : Event){
    console.log(b);
    this.request.seats--;
    if (this.request.seats == 0){
        alert("Sorry, no more seats available for this ride");
    }
}


}

import { Component, Input } from '@angular/core';
import { RidesService } from '../../../services/rides.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-find-item',
  templateUrl: './find-item.component.html',
  styleUrls: ['./find-item.component.css']
})
export class FindItemComponent {

  isDisabled;
  faStar = faStar;
  constructor(){}

  @Input() route : any;

  checkAvailability(){
        this.isDisabled = true;
        return this.isDisabled;
  }

  book(b : Event){
    console.log(b);
    this.route.seats--;
    if (this.route.seats == 0){
        alert("Sorry, no more seats available for this ride");
    }
}

}

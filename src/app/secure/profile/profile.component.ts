import { Component, OnInit } from '@angular/core';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faRoad = faRoad;
  faHome = faHome;
  faThumbsUp = faThumbsUp;
  faCar = faCar;
  faCalendar = faCalendar;

  constructor() { }

  ngOnInit(): void {
  }

}

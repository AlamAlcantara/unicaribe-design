import { Component, OnInit } from '@angular/core';

import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-center',
  templateUrl: './contact-center.component.html',
  styleUrls: ['./contact-center.component.css']
})
export class ContactCenterComponent implements OnInit {
  
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  
  constructor() { }

  ngOnInit() {
  }

}

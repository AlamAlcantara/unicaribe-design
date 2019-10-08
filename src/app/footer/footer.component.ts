import { Component, OnInit } from '@angular/core';

import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;
  faQuestion = faQuestion;
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faChevronDown = faChevronDown;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor() { }

  ngOnInit() {
  }

}

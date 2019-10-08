import { Component } from '@angular/core';

import {faUsers, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faUsers = faUsers;
  faTrophy = faTrophy;
  faGraduationCap = faGraduationCap;

  title = 'design-airbnb';

  constructor() { }
}

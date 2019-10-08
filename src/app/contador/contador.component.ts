import { Component, OnInit, Input } from '@angular/core';

import {faUsers, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {CountUpOptions} from 'countup.js';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  faUsers = faUsers;
  faTrophy = faTrophy;
  faGraduationCap = faGraduationCap;
  counterOpts: CountUpOptions = {
    duration: 3,
    startVal: 0
  }
  
  @Input()
  endVal:Number = 0;

  @Input()
  title:String = "";

  @Input()
  icon:IconDefinition = this.faUsers;

  constructor() { }

  ngOnInit() {
  }

}

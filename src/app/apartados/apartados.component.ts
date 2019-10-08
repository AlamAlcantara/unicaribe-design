import { Component, OnInit } from '@angular/core'; 

import {faChevronDown} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-apartados',
  templateUrl: './apartados.component.html',
  styleUrls: ['./apartados.component.css']
})
export class ApartadosComponent implements OnInit {
  faChevronDown = faChevronDown;
  constructor() { }

  ngOnInit() {
  }

}

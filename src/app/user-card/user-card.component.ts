import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {  

  @Input()
  imageUrl: String = "";

  @Input()
  name: String = "";

  @Input()
  role: String = "";

  @Input()
  career: String = "";
  
  constructor() { }

  ngOnInit() {
  }

}

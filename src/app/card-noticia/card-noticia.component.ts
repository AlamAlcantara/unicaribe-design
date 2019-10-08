import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-noticia',
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.css']
})
export class CardNoticiaComponent implements OnInit {


  @Input()
  imageUrl:String ="";

  @Input()
  title:String ="";

  @Input()
  content:String ="";

  @Input()
  date:String ="";

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imageObject : Array<Object> = [
    {
      image: '../assets/Banner-Etica-1.jpg',
      thumbImage: '../assets/Banner-Etica-1.jpg',
      alt: 'ETICA UNICARIBE'
    },
    {
      image: '../assets/Banner-Web-CITICED.jpg',
      thumbImage: '../assets/Banner-Web-CITICED.jpg',
      alt: 'CITICED'
    },
    {
      image: '../assets/conecta-slider-min.png',
      thumbImage: '../assets/conecta-slider-min.png',
      alt: 'CONECTA UNICARIBE',
    },
    {
      image: '../assets/bb-slider-min.png',
      thumbImage: '../assets/bb-slider-min.png',
      alt: 'CONTACTO BB',
    },
    {
      image: '../assets/fachada-slider-min.png',
      thumbImage: '../assets/fachada-slider-min.png',
      alt: 'FACHADA UNICARIBE',
    },
    {
      image: '../assets/Slider-Admisiones-WEB-1623x530.jpg',
      thumbImage: '../assets/Slider-Admisiones-WEB-1623x530.jpg',
      alt: 'ADMINISIONES',
    },
    {
      image: '../assets/slider-cayei.png',
      thumbImage: '../assets/slider-cayei.png',
      alt: 'CAYEI',
    },
    {
      image: '../assets/Slider-uniempleo-1-min.png',
      thumbImage: '../assets/Slider-uniempleo-1-min.png',
      alt: 'UNIEMPLEO',
    },
    {
      image: '../assets/Slider-Web-CITICED.jpg',
      thumbImage: '../assets/Slider-Web-CITICED.jpg',
      alt: 'CITICED',
    },
  ];

  imagesSize = {
    height:450, 
    width:window.innerWidth
  }

  constructor() { }

  ngOnInit() {
  }

}

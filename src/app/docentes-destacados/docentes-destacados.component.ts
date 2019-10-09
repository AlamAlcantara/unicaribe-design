import { Component, OnInit } from '@angular/core';

import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-docentes-destacados',
  templateUrl: './docentes-destacados.component.html',
  styleUrls: ['./docentes-destacados.component.css']
})
export class DocentesDestacadosComponent implements OnInit {

  faChevronDown = faChevronDown

  sliderOpts = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots":true,
    "infinite": false}

  users:Array<Object> = [
    {
      imageUrl:"../assets/Roberto-Quiroz-Derecho.jpg",
      role:"Ciencias Políticas y Jurídicas",
      name:"Roberto Quiroz",
      career: "Carrera de Derecho"
    },
    {
      imageUrl:"../assets/Belkis-Doñé-Adm-Hotelera.jpg",
      role:"Negocios",
      name:"Belkid Doñé",
      career:"Carrera de Administracioón Hotelera"
    },
    {
      imageUrl:"../assets/Ricardo-Suarez-Educacion.jpg",
      role:"Humanidades",
      name:"Ricardo Suárez",
      career: "Carrera de Educación"
    },
    {
      imageUrl:"../assets/Yanilka-Mejia-Ciclo-Comun.jpg",
      role:"Ciclo Comun",
      name:"Yanilka Mejía",
      career: "Metodología de Investigación"
    },
    {
      imageUrl:"../assets/Mercedes-Montañez-Rel-Internacionales.jpg",
      role:"Ciencias Jurídicas y Políticas",
      name:"Mercedes Montañez",
      career: "Carrera de Relaciones Internacionales"
    },
    {
      imageUrl:"../assets/Ricardo-Moreno-Contabilidad.jpg",
      role:"Negocios",
      name:"Ricardo Moreno",
      career: "Contabilidad"
    },
    {
      imageUrl:"../assets/Geremias-Miliano-Adm-de-Empresas.jpg",
      role:"Negocios",
      name:"Geremias Miliano",
      career: "Carrera de Administracioón de Empresas"
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  

}

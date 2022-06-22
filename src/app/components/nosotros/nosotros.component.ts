import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  images = [
    {
      imageSrc: './assets/img/fondo-renovable.jpg',
      imageAlt: 'Image 1'
    }, {
      imageSrc: './assets/img/recursos.jpg',
      imageAlt: 'Image 2'
    }, {
      imageSrc: './assets/img/fondo-renovable.jpg',
      imageAlt: 'Image 3'
    }, {
      imageSrc: './assets/img/recursos.jpg',
      imageAlt: 'Image 4'
    }, {
      imageSrc: './assets/img/contactos.jpg',
      imageAlt: 'Image 5'
    }    
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
}

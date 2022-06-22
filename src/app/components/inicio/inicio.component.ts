import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaProductos: Producto [] = []; 
  categorias = [
    {
      imageSrc: './assets/img/fondo-renovable.jpg',
      imageAlt: 'Image 1',
      nombre: "Higiene",
      descripcion: "dasdasdasmkdas maspoddasdasdasdasdasda adaadasdasdasd"
    }, {
      imageSrc: './assets/img/recursos.jpg',
      imageAlt: 'Image 2',
      nombre: "Tecnologías",
      descripcion: "dasdasdasmkdmaspd poddasdasdasd dasdasdadaadasdasdasd"
    }, {
      imageSrc: './assets/img/fondo-renovable.jpg',
      imageAlt: 'Image 3',
      nombre: "Ropas",
      descripcion: "dasdasdasmkdmaspd aspoddasdasdasdasda sdadaadasdasdasd"
    }, {
      imageSrc: './assets/img/recursos.jpg',
      imageAlt: 'Image 4',
      nombre: "Alimentos",
      descripcion: "dasdasdasmkdmasp aspoddasdasdasdasdasdasdadaad sdasd"
    }, {
      imageSrc: './assets/img/contactos.jpg',
      imageAlt: 'Image 5',
      nombre: "Otros",
      descripcion: "dasdasdasmkdma maspoddasdasdasdasdasdasdadaa dasdasd"
    }    
  ];
  comentariosCliente = [
    {
      nombre: "Marco Lopez",
      descripcion: "dasdasdasmkdas maspoddasdasdasdasdasda adaadasdasdasd"
    }, {
      nombre: "Empresa S.A",
      descripcion: "dasdasdasmkdmaspd poddasdasdasd dasdasdadaadasdasdasd"
    }, {
      nombre: "Lucia",
      descripcion: "dasdasdasmkdmaspd aspoddasdasdasdasda sdadaadasdasdasd"
    }  
  ];

  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.listarproductos();
  }

  listarproductos(){
    this._productoService.getProducos().subscribe(data=>{
      this.listaProductos = data;
      console.log(data)
    },error =>{
      console.log(error);
    })
  }
}

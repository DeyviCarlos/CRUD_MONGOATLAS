import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaProductos: Producto [] = []; 
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.listarproductos();
  }

  listarproductos(){
    this._productoService.getProducos().subscribe(data=>{
      this.listaProductos = data;
    },error =>{
      console.log(error);
    })
  }


}

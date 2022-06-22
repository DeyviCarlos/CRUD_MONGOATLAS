import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  listaProductos: Producto [] = []; 
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

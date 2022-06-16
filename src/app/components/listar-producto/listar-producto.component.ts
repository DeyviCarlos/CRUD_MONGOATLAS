import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  listaProductos: Producto[] = [];  
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.listarproductos();
  }

  listarproductos(){
    this._productoService.getProducos().subscribe(data=>{
      this.listaProductos = data;
      console.log(data);
    },error =>{
      console.log(error);
    })
  }
}

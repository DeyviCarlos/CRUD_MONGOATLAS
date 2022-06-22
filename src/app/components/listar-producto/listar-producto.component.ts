import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

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
    this._productoService.getMisProducos().subscribe(data=>{
      this.listaProductos = data;
      console.log(this.listaProductos[0]);
    },error =>{
      console.log(error);
    })
  }
  
  eliminarProducto(){
    /*
    Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })*/
    Swal.fire({
      title: 'Estás seguro de eliminar?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        //petición al servidor
        

        Swal.fire(
          'Eliminado!',
          'El producto fue eliminado.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'El producto no fue eliminado :)',
          'error'
        )
      }
    })
  }


}

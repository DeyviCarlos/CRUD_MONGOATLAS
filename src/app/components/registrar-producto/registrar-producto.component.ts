import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})

export class RegistrarProductoComponent implements OnInit {

  productoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private _productoService: ProductoService) {
      this.productoForm = this.fb.group({
        descripcion: ['',Validators.required],
        precio: ['', Validators.required],
        categoria: ['', Validators.required],
        unidadMedida: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  agregarProducto(){
    const producto: Producto = {
      _id: 0,
      descripcion: this.productoForm.get('descripcion')?.value,
      precio: this.productoForm.get('precio')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      unidadMedida: this.productoForm.get('unidadMedida')?.value,
    }
    console.log(producto)

    this._productoService.agregarProducto(producto).subscribe(data =>{

      if(data.mensaje == "agregado"){
        Swal.fire({
          icon: 'success',
          title: 'Producto Guardado',
          text: "Click en el botón para salir!",
          showConfirmButton: true,
          confirmButtonText: 'listo',
          confirmButtonColor: 'btn btn-success',
        })
        this.router.navigate(['/tienda/productos']);
        this.productoForm.reset();
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se puedo registrar!',
        })
      }

    }, error =>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puedo registrar!',
      })
      //this.productoForm.reset();
    })
  }

}

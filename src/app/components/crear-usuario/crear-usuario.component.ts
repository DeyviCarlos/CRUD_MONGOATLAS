import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
            private _usuarioService: UsuarioService) { 
    this.usuarioForm = this.fb.group({
      nombre: ['',Validators.required],
      //apellido_paterno: ['',Validators.required]
    })
    
  }
  ngOnInit(): void {
  }

  agregarUsuario(){
    /*
    obtener en consola los elementos
    console.log(this.usuarioForm.get('nombre')?.value);
    console.log(this.usuarioForm.get('apellido_paterno')?.value);

    const USUARIO: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      apellido_paterno: this.usuarioForm.get('apellido_paterno')?.value,
    }

    this._usuarioService.guardarUsuario(USUARIO).subscribe(data =>{
      console.log("usuario agregado")
      this.router.navigate(['/tienda/usuarios']);
    }, error =>{
      console.log(error);
      this.usuarioForm.reset();
    })

    */
  }


}

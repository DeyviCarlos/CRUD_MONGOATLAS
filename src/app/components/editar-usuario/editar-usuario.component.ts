import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuarioEditForm: FormGroup;
  //titulo='Crear Usuario';
  //id: string | null;
  id: string;

  constructor(private fb: FormBuilder, private router: Router,
              private aRouter: ActivatedRoute, private _usuarioService: UsuarioService) { 
    this.usuarioEditForm = this.fb.group({
        nombre:['', Validators.required],
        //apellido_paterno: ['',Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!
    //el id que pasa por parametro debe ser la misma variable que el de app.routing
    //this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //esEditar();
    this.llenarCampos();
  }
  /*
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Usuario';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data=>{
        this.usuarioForm.setValue({
          nombre:data.nombre,
          apellido_paterno: data.apellido_paterno
        })
      })
    }
  }
  */
  llenarCampos(){
      this._usuarioService.obtenerUsuario(this.id).subscribe(data=>{
        //console.log(data);  
        console.log(data);
        this.usuarioEditForm.setValue({
          nombre: data.nombre,
          //apellido_paterno: data.apellido_paterno
        })
      })
  }

  editarUsuario(){
    console.log(this.id);
    console.log(this.usuarioEditForm.get('nombre')?.value);
    console.log(this.usuarioEditForm.get('apellido_paterno')?.value);

    const USUARIO: Usuario = {
      nombre: this.usuarioEditForm.get('nombre')?.value,
      email: "",
      password: "",
      rol: ""
      //apellido_paterno: this.usuarioEditForm.get('apellido_paterno')?.value,
    }

    this._usuarioService.editarUsuario(this.id,USUARIO).subscribe(data =>{
      console.log("usuario editado")
      this.router.navigate(['/tienda/usuarios']);
    }, error =>{
      console.log(error);
      this.usuarioEditForm.reset();
    })

  }

}

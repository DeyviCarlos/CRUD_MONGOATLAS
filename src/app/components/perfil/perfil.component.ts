import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarioForm: FormGroup;
  //id: string;
  
  usuario: Usuario = {
    _id: 0,
    nombre: "Usuario",
    email: "example@gmail.com",
    password: "",
    rol: ""
  };
  

  constructor(private fb: FormBuilder, private router: Router,
    private aRouter: ActivatedRoute, private _usuarioService: UsuarioService) {
      this.usuarioForm = this.fb.group({
        nombre: ['',Validators.required],
        email: ['',Validators.required],
        
    })
    //this.id = this.aRouter.snapshot.paramMap.get('id')!
  }

  ngOnInit(): void {
    this.obtenerPerfil();
  }

  obtenerPerfil(){
    //console.log(this.usuarioForm.get('nombre')?.value);
    console.log(this.usuario);
    this._usuarioService.miperfilUsuario().subscribe(data=>{
      console.log(data);
      this.usuario = data;
      this.usuario.rol = data.role.nombre;
    },error =>{
      console.log(error);
    })
  }


}

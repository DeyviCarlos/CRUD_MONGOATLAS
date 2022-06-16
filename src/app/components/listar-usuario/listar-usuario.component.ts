import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  //variable que será enviada al front
  listaUsuario: Usuario[] = [];

  //tambien se puede implementar alertas
  //ver la documentacion de toastr
  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();  
  }

  //se obtiene los datos del back
  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data=>{
      console.log(data);
      this.listaUsuario = data;
    },error =>{
      console.log(error);
    })
  }

  eliminarUsuario(id: any){
    this._usuarioService.eliminarUsuario(id).subscribe(data =>{
      //colocar unos alertar con toastr el cual salio imcompatible
      console.log("El usuario fue eliminado");
      this.obtenerUsuarios();
    },error =>{
      console.log(error);
    })
  }
}

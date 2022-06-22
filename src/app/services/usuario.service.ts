import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //url que se usa para hacer la peticion get a la BD
  url = 'http://localhost:5000/api/tienda';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get(this.url+'/usuarios/');
  }

  eliminarUsuario(id: string): Observable<any>{
    return this.http.delete(this.url+'/usuarios/'+ id)
  }
  /*
  guardarUsuario(usuario: Usuario): Observable<any>{
    return this.http.post(this.url+"create", usuario);
  }*/

  //update
  obtenerUsuario(id: string): Observable<any>{
    return this.http.get(this.url+'/usuarios/'+"edit/"+id);
  }

  editarUsuario(id: string, usuario: Usuario): Observable<any>{
    return this.http.put(this.url+'/usuarios/'+"edit/"+id, usuario);
  }
  //mi perfil
  miperfilUsuario(): Observable<any>{
    return this.http.get(this.url+'/usuarios/'+"miperfil");
  }

}

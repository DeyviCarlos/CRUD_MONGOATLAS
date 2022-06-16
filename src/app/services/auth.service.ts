import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:5000/api/tienda/auth';

  constructor(private http: HttpClient, private route: Router) { }
  /*
  logear(usuario: Usuario): Observable<any>{
    return this.http.post(this.url, usuario);
  }*/
  logear(email: string,password: string): Observable<any>{
    return this.http.post(this.url+'/login/user', {email,password});
  }
  register(usuario: Usuario): Observable<any>{
    return this.http.post(this.url+'/register', usuario);
  }
  //para validar las rutas del lado del cliente, en caso exista token o no
  verificarlogeo(): boolean{
    //return !!localStorage.getItem('token');

    if(!localStorage.getItem('token')){
      return false;
    }else{
      return true;
    }
  }
  //obtener el token del storage
  getToken(){
    return localStorage.getItem('token');
  }
  //cerrar sesion
  logout(){

    localStorage.removeItem('token');
    this.route.navigate(['tienda/login']);
  }

}

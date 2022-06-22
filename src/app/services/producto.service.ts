import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:5000/api/tienda';

  constructor(private http: HttpClient, ) { }

  getProducos(): Observable<any>{
    return this.http.get(this.url+'/productos/');
  }
  getMisProducos(): Observable<any>{
    return this.http.get(this.url+'/productos/misproductos');
  }
  agregarProducto(producto:Producto): Observable<any>{
    return this.http.post(this.url+'/productos/add',producto);
  }


}

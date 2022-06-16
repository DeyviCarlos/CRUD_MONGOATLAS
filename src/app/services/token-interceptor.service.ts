import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private _authService: AuthService) { }

  //interceptor nos permite obtener el token del Storage para enviarlo por el header
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log(this._authService.getToken());
    const token = localStorage.getItem('token');
    console.log('valor actual del Req:'+req)
    if(token){
      const tokenizeReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._authService.getToken()}`
        }
      })
      return next.handle(tokenizeReq);
    }
    return next.handle(req);
  }
  
}

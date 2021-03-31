import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlApi = 'http://localhost:3500/user/';

  constructor(private http: HttpClient) { }


  añadirUsuario(usuario: any) {
    return this.http.post(this.urlApi, usuario);
  }

  loginUsuario(usuario:any){
    return this.http.post(this.urlApi+'login', usuario)
  }



}

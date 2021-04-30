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

  editarUsuario(usuario:any, id:any){
    return this.http.put(this.urlApi+ id, usuario)
  }

 //OBTENER USUARIO

  obtenerUsuario(id:any){
    return this.http.get(this.urlApi+ id)
  }
// OBTENER USUARIOS
  obtenerUsuarios(){
    return this.http.get(this.urlApi)
  }

 // AGREGAR CALIFICACION 
  agregarCalificacion(iduser:any, calificacion: any){
    return this.http.put(this.urlApi + '/calificacion/' + iduser , {calificacion})

  }




}

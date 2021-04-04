import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  urlApi = 'http://localhost:3500/administrador/';

  constructor(private http: HttpClient) { }


  añadirAdministrador(administrador: any) {
    return this.http.post(this.urlApi, administrador);
  }

  loginAdministrador(administrador:any){
    return this.http.post(this.urlApi+'loginAdministrador', administrador)
  }

  editarAdministrador(administrador:any, id:any){
    return this.http.put(this.urlApi+ id, administrador)
  }

  //http://localhost:3500/user/1'
  obtenerAdministrador(id:any){
    return this.http.get(this.urlApi+ id)
  }

  obtenerAdministradores(){
    return this.http.get(this.urlApi)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoUsuarioService {

  urlApi = 'http://localhost:3500/producto/';

  constructor(private http: HttpClient) { }

  //OBTENER PRODUCTOS POR USUARIO

  obtenerProductos(id: any) {
    return this.http.get(this.urlApi + 'user/' + id);
  }

  

}

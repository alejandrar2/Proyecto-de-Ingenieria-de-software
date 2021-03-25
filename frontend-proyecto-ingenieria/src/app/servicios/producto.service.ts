import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlApi = 'http://localhost:3500/producto/';

  constructor(private http: HttpClient) { 

  }
//creacion de metodos para realizar consultas al back-end
  obtenerProductos() {
    return this.http.get(this.urlApi);
  }

  obtenerProducto(id:any) {
    return this.http.get(this.urlApi + id);
  }

  guardarProducto(producto:any) {
    return this.http.post(this.urlApi, producto);
  }








}

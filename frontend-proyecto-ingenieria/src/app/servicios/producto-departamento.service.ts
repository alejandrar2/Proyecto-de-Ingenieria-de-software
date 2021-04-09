import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoDepartamentoService {

  urlApi = 'http://localhost:3500/producto/';

  constructor(private http: HttpClient) { }

  //OBTENER PRODUCTOS POR DEPARTAMENTOS

  obtenerProductos(id: any) {
    return this.http.get(this.urlApi + 'departamento/' + id);
  }

}

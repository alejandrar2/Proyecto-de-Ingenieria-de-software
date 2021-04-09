import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlApi = 'http://localhost:3500/categoria/';

  constructor(private http: HttpClient) {}

  
//creacion de metodos para realizar consultas al back-end 
  obtenerCategorias() {
    return this.http.get(this.urlApi);
  }

  obtenerCategoria(id:any) {
    return this.http.get(this.urlApi + id);
  }

  guardarCategoria(categoria:any) {
    return this.http.post(this.urlApi, categoria);
  }

}













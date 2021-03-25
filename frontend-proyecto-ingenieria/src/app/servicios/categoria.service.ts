import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlApi = 'http://localhost:3500/categoria';

  constructor(private http: HttpClient) {

  }

  obtenerCategorias() {
    return this.http.get(this.urlApi);

  }
}

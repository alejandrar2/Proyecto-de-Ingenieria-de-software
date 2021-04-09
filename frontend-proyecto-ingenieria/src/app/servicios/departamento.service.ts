import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  urlApi = 'http://localhost:3500/departamento/';

  constructor(private http : HttpClient) { 

  }

  //OBTENER DEPARTAMENTOS

  obtenerdepartamentos() {
    return this.http.get(this.urlApi);
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  urlApi = 'http://localhost:3500/denuncia/';

  constructor(private http: HttpClient) {}
  
//creacion de metodos para realizar consultas al back-end

  obtenerDenuncias() {
    return this.http.get(this.urlApi);
  }

  obtenerDenuncia(id:any) {
    return this.http.get(this.urlApi + id);
  }

  guardarDenuncia(denuncia:any) {
    return this.http.post(this.urlApi, denuncia);
  }

  
eliminarDenuncia(idDenuncia:any){
  return this.http.delete(this.urlApi + idDenuncia)

}

obtenerDenunicasUsuario(id:any){
  return this.http.get(this.urlApi + 'user/' + id);
}

  
}


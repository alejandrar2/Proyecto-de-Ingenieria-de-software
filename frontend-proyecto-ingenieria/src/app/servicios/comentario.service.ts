import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ComentarioService {
    urlApi = 'http://localhost:3500/producto/';

    constructor(private http: HttpClient) { 

    }


    guardarComentario(comentario:any) {
        return this.http.post(this.urlApi, comentario);
      }
  }
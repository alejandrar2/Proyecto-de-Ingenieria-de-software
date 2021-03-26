import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubirImagenService {

  constructor( private http:HttpClient ) { }

  subirImagen(data:FormData){

    return this.http.post('https://api.cloudinary.com/v1_1/djsgzhwqe/image/upload',data);

  }
}

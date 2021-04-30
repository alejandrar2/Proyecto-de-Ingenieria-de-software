import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosUsuario } from '../interfaces/productosUsuario';

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

  obtenerProducto(id: any) {
    return this.http.get(this.urlApi + id);
  }

  guardarProducto(producto: any) {
    return this.http.post(this.urlApi, producto);
  }


  eliminarProducto(idProducto: any) {
    return this.http.delete(this.urlApi + idProducto)

  }

  //departamento/:idDepartamento/categoria/:idCategoria
  //producto/departamento/2/categoria/1
  obtenerProductosDepartamentoCategoria<ProductosUsuario>(idDepartamento: any, idCategoria: any) {
    return this.http.get(this.urlApi + 'departamento/' + idDepartamento + '/categoria/' + idCategoria);
  }
  
  obtenerProductosCategoria<ProductosUsuario>(idCategoria: any) {
    return this.http.get(this.urlApi + 'categoria/' + idCategoria);
  }

  obtenerProductoFecha(idFecha: any) {
    return this.http.get(this.urlApi + 'obtenerFechaProducto/' + idFecha)
  }

//http://localhost:3500/producto/precioProducto/10/5000/2021-04-18/3

  obtenerProductoPrecio(Min: any, Max: any, fecha: any, calificacion: any) {
    return this.http.get<ProductosUsuario>(this.urlApi + 'precioProducto/' + Min + '/' + Max + '/' + fecha + '/' + calificacion);
  }




}


import { Component, OnInit } from '@angular/core';
import { ProductosUsuario } from '../interfaces/productosUsuario';
import { CategoriaService } from '../servicios/categoria.service';
import { DepartamentoService } from '../servicios/departamento.service';
import { ProductoDepartamentoService } from '../servicios/producto-departamento.service';
import { ProductoService } from '../servicios/producto.service';
import { ProductoInterface } from '../interfaces/productos'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  idDepartamento: number = 0;
  idCategoria: number = 0;
  idFecha: number = 0;
  idPrecio: number = 0;
  idCalificacion: number = 0;
  categorias: any = [];
  productosDepartamentoCategoria: ProductosUsuario[] = [];
  productos: ProductosUsuario[] = [];
  productosFecha: ProductosUsuario[] = [];
  productosCategoria: ProductoInterface[] = [];
  productosPrecioFechaCalificacion: ProductosUsuario[] = []
  departamentos: any = [];
  filtro: String = '';
  fecha: any;
  precioMax: any = 0;
  precioMin: any = 0;


  constructor(private serviceProducto: ProductoService, private serviceCategorias: CategoriaService, private productoDepartamentoService: ProductoDepartamentoService, private serviceDepartamento: DepartamentoService) { }

  ngOnInit(): void {


    this.obtenerDepartamentos();
    this.obtenerCategorias();

  }

  //OBTENER PRODUCTOS DEPARTAMENTO POR CATEGORIA
  obtenerProductosCategorias() {


    if (this.idDepartamento == 0 && this.idCategoria == 0) {
      console.log('object')
    } else {
      this.categorias.forEach((item: any) => {
        if (item.id == this.idCategoria) {
          this.filtro = item.nombre
        }
      });


      this.serviceProducto.obtenerProductosDepartamentoCategoria(this.idDepartamento, this.idCategoria).subscribe((data: any) => {
        this.productosDepartamentoCategoria = data;

      })
    }
  }
  //OBTENER DEPARTAMENTOS
  obtenerDepartamentos() {
    this.serviceDepartamento.obtenerdepartamentos().subscribe((data: any) => {
      this.departamentos = data
    });
  }

  //OBTENER CATEGORIAS
  obtenerCategorias() {
    this.serviceCategorias.obtenerCategorias().subscribe((data: any) => {
      if (!data.mensaje) {
        this.categorias = data;
      }
    });
  }

  obtenerProductosFecha() {
    this.serviceProducto.obtenerProductoFecha(this.fecha).subscribe((data: any) => {
      if (data) {
        this.productosFecha = data;
      }
    })
  }

  obtnerProductoPrecio() {
    this.serviceProducto.obtenerProductoPrecio(this.precioMin, this.precioMax, this.fecha, this.idCalificacion).subscribe((data: any) => {
      if (data) {
        this.productosPrecioFechaCalificacion = data;
      }
    })
  }


}

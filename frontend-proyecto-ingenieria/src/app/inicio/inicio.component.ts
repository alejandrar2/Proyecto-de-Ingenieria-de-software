import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../servicios/categoria.service';
import { DepartamentoService } from '../servicios/departamento.service';
import { ProductoDepartamentoService } from '../servicios/producto-departamento.service';
import { ProductoService } from '../servicios/producto.service';

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
  productos: any = [];
  productosFecha: any = [];
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



  //OBTENER PRODUCTOS POR CATEGORIA

  obtenerProductosCategorias() {


    if (this.idDepartamento != 0 && this.idCategoria != 0) {

    }
    this.categorias.forEach((item: any) => {
      if (item.id == this.idCategoria) {
        this.filtro = item.nombre
      }
    });

    this.serviceProducto.obtenerProductosCategoria(this.idCategoria).subscribe((data: any) => {

      this.productos = data;
     


    })

  }
  //OBTENER DEPARTAMENTOS

  obtenerDepartamentos() {
    this.serviceDepartamento.obtenerdepartamentos().subscribe((data: any) => {
      if (!data.mensaje) {
        this.departamentos = data;
      }
    });;
  }

  //OBTENER CATEGORIAS
  obtenerCategorias() {
    this.serviceCategorias.obtenerCategorias().subscribe((data: any) => {
      this.categorias = data;
      if (!data.mensaje) {

        if (data.length > 0) {
          this.categorias = data;
        }

      }
    });
  }


  obtenerProductosFecha() {

    this.serviceProducto.obtenerProductoFecha(this.fecha).subscribe((data: any) => {
     
      if (!data.mensaje) {

        if (data.length > 0) {
          this.productosFecha = data;
        }

      }
    })

  }

obtnerProductoPrecio(){

  this.serviceProducto.obtenerProductoPrecio(this.precioMin, this.precioMax,this.fecha, this.idCalificacion).subscribe((data:any)=>{
    console.log(data);

    if (!data.mensaje) {

      if (data.length > 0) {
        this.productosFecha = data;
      }

    }

  })
}
  

}

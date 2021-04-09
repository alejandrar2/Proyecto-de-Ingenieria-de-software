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
  categorias: any = [];
  productos: any = [];
  departamentos: any = [];
  filtro: String ='';


  constructor( private serviceProducto: ProductoService ,private serviceCategorias: CategoriaService, private productoDepartamentoService: ProductoDepartamentoService, private serviceDepartamento: DepartamentoService ) { }

  ngOnInit(): void {

    this.obtenerDepartamentos();
    this.obtenerCategorias();

  }

  //OBTENER PRODUCTOS POR DEPARTAMENTO
  obtenerProductosDepartamento(){

    this.departamentos.forEach((item:any) => {
      if (item.id == this.idDepartamento) {
        this.filtro = item.nombre
      }
    });

    this.productoDepartamentoService.obtenerProductos(this.idDepartamento).subscribe((data:any)=>{

      this.productos = [];

      data.forEach((item:any )=> {
        this.productos.push(item.producto);
      });

      console.log(this.productos)

    });;
  }

  //OBTENER PRODUCTOS POR CATEGORIA

  obtenerProductosCategorias(){

    this.categorias.forEach((item:any) => {
      if (item.id == this.idCategoria) {
        this.filtro = item.nombre
      }
    });

    this.serviceProducto.obtenerProductosCategoria(this.idCategoria).subscribe((data:any)=>{
      
      this.productos = data;

      
    })
    
  }
  //OBTENER DEPARTAMENTOS
  
  obtenerDepartamentos() {
   this.serviceDepartamento.obtenerdepartamentos().subscribe((data:any)=>{
      this.departamentos = data;
      
    
    });;
  }

  //OBTENER CATEGORIAS
  obtenerCategorias(){
    this.serviceCategorias.obtenerCategorias().subscribe((data:any)=>{
      this.categorias = data;
    });
  }

}

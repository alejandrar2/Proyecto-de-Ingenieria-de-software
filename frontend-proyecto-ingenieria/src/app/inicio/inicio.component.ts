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


  constructor( private serviceProducto: ProductoService ,private serviceCategorias: CategoriaService, private productoDepartamentoService: ProductoDepartamentoService, private serviceDepartamento: DepartamentoService ) { }

  ngOnInit(): void {

    this.obtenerDepartamentos();
    this.obtenerCategorias();

  }

  obtenerProductos(){
    this.productoDepartamentoService.obtenerProductos(this.idDepartamento).subscribe((data:any)=>{
      this.productos = data;
      console.log(data)
    });;
  }

  obtenerCategorias(){
    this.serviceProducto.obtenerProductosCategoria(this.idCategoria).subscribe((data:any)=>{
      this.categorias = data;
    })
    
  }

  obtenerDepartamentos() {
   this.serviceDepartamento.obtenerdepartamentos().subscribe((data:any)=>{
      this.departamentos = data;
      console.log(data)
    });;
  }



}

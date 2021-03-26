import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];

  formularioProducto = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    categoriaId: new FormControl('', [Validators.required])
  });
  constructor(private serviceProducto: ProductoService, private serviceCategoria: CategoriaService) { }

  categorias: any = []

  ngOnInit(): void {

    this.obtenerProductos();
    
  }

  obtenerProductos() {
    this.serviceProducto.obtenerProductos().subscribe((data: any) => {

      console.log(data);
      if (!data.mensaje) {
        this.productos = data
      }

    });
  }

  obtenerProducto() {
    this.serviceProducto.obtenerProducto('1').subscribe((data: any) => {
      console.log(data);
    });
  }


  guardar() {
    console.log(this.formularioProducto.value);

    this.serviceProducto.guardarProducto(this.formularioProducto.value).subscribe((res: any) => {
      console.log(res);
      this.obtenerProductos();
    });
    

  }
  eliminarProducto(idProducto:any){
    this.serviceProducto.eliminarProducto(idProducto).subscribe((res: any) =>{
      console.log(res);
      this.obtenerProductos();
    });
   
   
  }


}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { SubirImagenService } from 'src/app/servicios/subir-imagen.service';

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
    //categoriaId: new FormControl('', [Validators.required])
  });
  constructor(private serviceProducto: ProductoService, private serviceCategoria: CategoriaService, private serviceImagen: SubirImagenService) { }

  categorias: any = [];
  urlImagen: string = '';

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

  subirImagen(e: any) {
    let file = e.target.files[0];
    console.log(e.target.files[0]);
    let formData = new FormData();

    formData.append('upload_preset', 'imagenes');
    formData.append('file', e.target.files[0]);

    this.serviceImagen.subirImagen(formData).subscribe((res: any) => {
      console.log(res);
      this.urlImagen = res.url;
    });;


  }


  guardar() {
    console.log(this.formularioProducto.value); //req.body.data.nombre, req.body.img.nombre,

    this.serviceProducto.guardarProducto({ data: this.formularioProducto.value, img: this.urlImagen }).subscribe((res: any) => {
      console.log(res);
      this.obtenerProductos();
    });


  }
  eliminarProducto(idProducto: any) {
    this.serviceProducto.eliminarProducto(idProducto).subscribe((res: any) => {
      console.log(res);
      this.obtenerProductos();
    });


  }


}
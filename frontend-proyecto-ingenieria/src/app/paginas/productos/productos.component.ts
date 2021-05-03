import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { SubirImagenService } from 'src/app/servicios/subir-imagen.service';
import { HttpClient } from '@angular/common/http';

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
    estado: new FormControl('0', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    categoriumId: new FormControl('', [Validators.required])
  });
  constructor(private serviceProducto: ProductoService, private serviceCategoria: CategoriaService, private serviceImagen: SubirImagenService, private httpClient: HttpClient) { }

  categorias: any = [];
  urlImagen: string = '';
  imagenSubida = false;
  backendHost: string = 'http://localhost:3500';
  producto: any = [];
  mensaje: String = '';
  alert: any;

  ngOnInit(): void {

    this.obtenerProductos();
    this.obtenerCategorias();


  }

  obtenerProductos() {
    this.serviceProducto.obtenerProductos().subscribe((data: any) => {

      console.log(data);
      if (!data.mensaje) {
        this.productos = data
      }

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
      this.imagenSubida = true;
    });;


  }


  guardar() {
    console.log(this.formularioProducto.value);

    this.serviceProducto.guardarProducto({ data: this.formularioProducto.value, img: this.urlImagen }).subscribe((res: any) => {
      console.log(res);
      this.obtenerProductos();
      this.limpiarCampos();
      this.mensaje = 'Agregado correctamente'
      this.alert = 'success'

    });

  }

  limpiarCampos() {
    this.formularioProducto.setValue({
      nombre: '',
      descripcion: '',
      estado: 0,
      precio: '',
      fecha: '',
      categoriumId: ''


    })

  }




  eliminarProducto(idProducto: any) {
    this.serviceProducto.eliminarProducto(idProducto).subscribe((res: any) => {
      console.log(res);
      this.obtenerProductos();
      this.mensaje = 'Eliminado con exito';
      this.alert = 'danger';
    });


  }

  obtenerCategorias() {
    this.serviceCategoria.obtenerCategorias().subscribe((data: any) => {
      this.categorias = data;
    });
  }

  editarProducto(idProducto: any) {
    console.log("Id producto es: " + idProducto)
    this.httpClient.get(`${this.backendHost}/producto/${idProducto}`)
      .subscribe(res => {
        this.producto = res;
        console.log(this.producto);
      });
  }

}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
// validar campos (del modal)
  categorias: any = [];

  formularioCategoria = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
  });

  constructor(private serviceCategoria: CategoriaService) { } // inyectar el servicio en el constructor

  ngOnInit(): void {

    this.obtenerCategorias();

  }

  obtenerCategorias() {
    this.serviceCategoria.obtenerCategorias().subscribe((data: any) => {

      console.log(data);
      if (!data.mensaje) {
        this.categorias = data
      }

    });
  }

  obtenerCategoria() {
    this.serviceCategoria.obtenerCategoria('1').subscribe((data: any) => {
      console.log(data);
    });
  }

  guardar() {
    console.log(this.formularioCategoria.value);

    this.serviceCategoria.guardarCategoria(this.formularioCategoria.value).subscribe((res: any) => {
      console.log(res);
      this.obtenerCategorias();
    });

  }

}

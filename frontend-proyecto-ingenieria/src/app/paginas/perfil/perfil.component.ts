import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubirImagenService } from 'src/app/servicios/subir-imagen.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  formularioActualizar = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email])
  });

  urlImagen: string = '';
  imagenSubida = false;
  backendHost: string = 'http://localhost:3500';
  personas: any = [];
  persona: any = [];

  constructor(private httpClient: HttpClient, private serviceImagen: SubirImagenService) { }

  idUsuario: String = '';

  ngOnInit(): void {
    this.httpClient.get(`${this.backendHost}/user`)
      .subscribe(res => {
        this.personas = res;
        console.log(this.personas);
      });

    this.idUsuario = JSON.parse(window.localStorage.getItem('user') || '');

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

  actualizar(i: any) {
    this.httpClient.put(`${this.backendHost}/user/${this.idUsuario}`, this.formularioActualizar)
      .subscribe((res: any) => {
        console.log(res);
      })
  }

  editar(i: any) {
    this.httpClient.get(`${this.backendHost}/user/${i}`)
      .subscribe(res => {
        this.persona = res;
        console.log(this.persona);
      });
  }
}

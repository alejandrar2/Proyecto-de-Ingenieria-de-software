import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubirImagenService } from 'src/app/servicios/subir-imagen.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  urlImagen: string = '';
  imagenSubida = false;
  backendHost: string = 'http://localhost:3500';
  personas: any = [];
  persona = {
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    genero: '',
    correo: '',
    personaId: '',
    id: ''
  }

  constructor(private serviceUsuario: UsuarioService, private serviceImagen: SubirImagenService, private Router: Router) { }

  idUsuario: String = '';

  ngOnInit(): void {

    this.idUsuario = JSON.parse(window.localStorage.getItem('user') || '');


    this.obtenerUsuario();

  }

  obtenerUsuario() {
    this.serviceUsuario.obtenerUsuario(this.idUsuario).subscribe((res: any) => {
      console.log(res);
      this.persona.nombre = res.persona.nombre;
      this.persona.apellido = res.persona.apellido;
      this.persona.telefono = res.persona.telefono;
      this.persona.correo = res.correo;
      this.persona.direccion = res.persona.direccion;
      this.persona.genero = res.persona.genero;
      this.persona.id = res.id;
      this.persona.personaId = res.personaId
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

  actualizar() {
    console.log(this.persona);
    this.serviceUsuario.editarUsuario(this.persona, this.idUsuario).subscribe((res: any) => {

      if (res.ok) {
        console.log('Se actualizo con exito');
        this.Router.navigate(['/dashboard-cliente']);
      } else {
        console.log('Error');
      }

    })
  }

}

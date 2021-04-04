import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-administrador',
  templateUrl: './crear-administrador.component.html',
  styleUrls: ['./crear-administrador.component.css']
})
export class CrearAdministradorComponent implements OnInit {

  administrador: any = [];

  formularioRegistro = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private serviceAdministrador: AdministradorService, private router: Router) { }

  ngOnInit(): void {
  }

  crearAdministrador() {
    console.log(this.formularioRegistro.valid)

    this.serviceAdministrador.añadirAdministrador(this.formularioRegistro.value).subscribe((data: any) => {
      console.log(data);
      if (data) {
        window.localStorage.setItem('administrador', JSON.stringify(data.administrador));
        this.router.navigate(['/dashboard']);
      } else {
        console.log('No se registro')
      }

    })

  }

}

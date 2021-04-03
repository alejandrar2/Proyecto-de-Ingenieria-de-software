import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {


  usuario: any = [];

  formularioRegistro = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });



  constructor(private serviceUsuario: UsuarioService, private router: Router) { }

  ngOnInit(): void {

  }

  crearUsuario() {
    console.log(this.formularioRegistro.valid)

    this.serviceUsuario.añadirUsuario(this.formularioRegistro.value).subscribe((data: any) => {
      console.log(data);
      if (data) {
        window.localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigate(['/dashboard-cliente']);
      } else {
        console.log('No se registro')
      }

      
    })

  }

}

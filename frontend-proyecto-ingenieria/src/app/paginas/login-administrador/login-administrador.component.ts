import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministradorService } from 'src/app/servicios/administrador.service';

@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent implements OnInit {

  formularioLogin = new FormGroup({
    correo: new FormControl(),
    password: new FormControl()
  });

  constructor(private serviceUser: AdministradorService,private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.serviceUser.loginAdministrador(this.formularioLogin.value).subscribe((data: any) => {
      console.log(data);
      if (data.ok) {
        window.localStorage.setItem('administrador', JSON.stringify(data.administrador));
        this.router.navigate(['/dashboard']);
      } else {
        console.log('No se registro')
      }
    });
  }

  obtenerLocalStorage(){
    var idUsuario:any = localStorage.getItem("user");
  }

}


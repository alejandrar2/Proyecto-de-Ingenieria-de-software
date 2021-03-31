import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  formularioLogin = new FormGroup({
    correo: new FormControl(),
    password: new FormControl()
  });

  constructor(private serviceUser: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }



  login() {
    this.serviceUser.loginUsuario(this.formularioLogin.value).subscribe((data: any) => {
      console.log(data);
      if (data.ok) {
        window.localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigate(['/dashboard-cliente']);
      } else {
        console.log('No se registro')
      }
    });
  }
}

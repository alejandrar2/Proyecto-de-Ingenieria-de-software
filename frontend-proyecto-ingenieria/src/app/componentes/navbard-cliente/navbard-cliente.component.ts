import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbard-cliente',
  templateUrl: './navbard-cliente.component.html',
  styleUrls: ['./navbard-cliente.component.css']
})
export class NavbardClienteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.setItem('user', JSON.stringify(null));
    this.router.navigate(['/login-usuario']);
  }

}

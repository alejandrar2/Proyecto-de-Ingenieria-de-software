import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> a6fedb7e723092c0c42f94300dbcc11deb2df4bb

@Component({
  selector: 'app-navbard-cliente',
  templateUrl: './navbard-cliente.component.html',
  styleUrls: ['./navbard-cliente.component.css']
})
export class NavbardClienteComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private router:Router) { }
>>>>>>> a6fedb7e723092c0c42f94300dbcc11deb2df4bb

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  cerrarSesion(){
    localStorage.setItem('user', JSON.stringify(null));
    this.router.navigate(['/login-usuario']);
  }

>>>>>>> a6fedb7e723092c0c42f94300dbcc11deb2df4bb
}

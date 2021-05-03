import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})


export class ClientesComponent implements OnInit {

  personas: any = [];
  backendHost: string = 'http://localhost:3500';

  constructor(private httpClient: HttpClient) { }
  mensaje : String = '';
  alert: any;

  ngOnInit() {

    

    this.httpClient.get(`${this.backendHost}/user`)
      .subscribe(res => {
        this.personas = res;
        console.log(this.personas);
      });
  }

  eliminarPersona(i: any) {
    console.log("eliminar el elemento " + i);
    this.httpClient.delete(`${this.backendHost}/user/${i}`)
      .subscribe((res: any) => {
        console.log(res);
        if (res.codigoResultado == 1) {
          this.personas.splice(res, 1);
        }
      });

      this.mensaje = 'Eliminado con exito';
        this.alert = 'danger';
  }  

}
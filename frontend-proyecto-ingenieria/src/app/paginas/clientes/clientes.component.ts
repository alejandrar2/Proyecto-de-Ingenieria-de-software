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
  constructor( private httpClient: HttpClient) { }
  
  ngOnInit() {
    this.httpClient.get(`${this.backendHost}/user`)
            .subscribe(res => { //esta funcion de tipo flecha se ejecuta cuando el servidor responde 
                this.personas = res; //almacenamos las personas que estan almacenadas  en el servidor
                //res trae un json con toda la informacion 
                console.log(this.personas);

            });
  }

  eliminar (i:any){
    console.log("eliminar el elemento " + i);
    this.httpClient.delete(`${this.backendHost}/user/${i}`)
      .subscribe((res:any) => {
        console.log(res);
        if(res.codigoResultado == 1){
          this.personas.splice(res,1);
        }
      });
  }
}
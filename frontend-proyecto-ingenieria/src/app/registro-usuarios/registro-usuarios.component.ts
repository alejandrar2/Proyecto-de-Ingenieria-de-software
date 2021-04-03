import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({//Decorador
    selector: 'registro-usuarios',
    templateUrl: './registro-usuarios.component.html',
    styleUrls: ['./registro-usuarios.component.css']
})

export class RegistroUsuariosComponent implements OnInit {

    formularioRegistro = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required]),
        telefono: new FormControl('', [Validators.required]),
        direccion: new FormControl('', [Validators.required]),
        genero: new FormControl('', [Validators.required]),
        correo: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        contrato: new FormControl('', [Validators.required])
    });

    personas: any = []; // aqui se almacenaran las personas que estan en el servidor
    backendHost: string = 'http://localhost:3500';

    constructor(private httpClient: HttpClient) { } //inyeccion retorna una instancia del tipo HttpClient 
    //y la almacena en httpClient y se puede utilizar fuera del constructor 
    ngOnInit() {  // en este punto esta cargado el sitio 
        this.httpClient.get(`${this.backendHost}/user`)
            .subscribe(res => { //esta funcion de tipo flecha se ejecuta cuando el servidor responde 
                this.personas = res; //almacenamos las personas que estan almacenadas  en el servidor
                //res trae un json con toda la informacion 
                console.log(this.personas);

            });

    }

    guardar() {
        console.log('Formulario valido', this.formularioRegistro.valid);
        this.httpClient.post(`${this.backendHost}/user`, this.formularioRegistro.value)// 
            .subscribe((res: any) => {//sucribe el resultado del metodo post
                console.log(res);
                this.personas.push(res) //agrega al arreglo personas el usuario guardado
            });

    }
}
export class AppComponent {
    title = 'formularioUsuario';
}
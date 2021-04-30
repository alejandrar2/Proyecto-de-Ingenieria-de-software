import { Component, OnInit } from '@angular/core';
import { ProductoService, } from '../../servicios/producto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DenunciaService } from '../../servicios/denuncia.service';
import { ComentarioService } from '../../servicios/comentario.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.component.html',
  styleUrls: ['./perfil-vendedor.component.css']
})
export class PerfilVendedorComponent implements OnInit {

  productos: any = [];
  calificacion : any;
  idUser: any;

  

   formularioComentario = new FormControl({
    contenido: new FormControl('', [Validators.required]),
   });

   backendHost: string = 'http://localhost:3500';
  //comentario: any = [];

  // formularioDenuncia = new FormGroup({
  //   contenido: new FormControl('', [Validators.required]),
  // });
  
  denuncia: any = {
    contenido:" ",
  };

  formularioEstrellas = new FormGroup({
    estrella1: new FormControl('', [Validators.required]),
    estrella2: new FormControl('', [Validators.required]),
    estrella3: new FormControl('', [Validators.required]),
    estrella4: new FormControl('', [Validators.required]),
    estrella5: new FormControl('', [Validators.required]),
  });

  constructor(private httpClient: HttpClient,private serviceComentario: ComentarioService,private serviceProducto: ProductoService, private serviceDenuncia: DenunciaService, private serviceUser : UsuarioService) { }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerLocalStorage();
    this.obtenerDenuncias();
    
  }

  get nombre(){ return this.formularioEstrellas.get('estrella1');}

  obtenerLocalStorage(){
    var idUsuario:any = localStorage.getItem("user");
    console.log(idUsuario);
  }

  obtenerProductos() {
    this.serviceProducto.obtenerProductos().subscribe((data: any) => {

      console.log(data);
      if (!data.mensaje) {
        this.productos = data
      }

    });
  }

  obtenerDenuncias() {
    this.serviceDenuncia.obtenerDenuncias().subscribe((data: any) => {

      console.log(data);

    });
  }

  //AGREGAR CALIFICACION 

 agregarCalificacion(id:any, calificacion: any){
   this.serviceUser.agregarCalificacion(this.idUser, this.calificacion).subscribe((data: any)=>{

    
   })
   
 }

  // denuncia(){
  //   console.log(this.formularioDenuncia.valid)
  //   this.serviceDenuncia.guardarDenuncia( {data:this.formularioDenuncia.value})
  //       .subscribe((res: any) => {
  //         console.log(res);
  //         this.obtenerDenuncias();
  //       });
  // }
  enviarDenuncia(){
    this.httpClient.post(`${this.backendHost}/denuncia`,this.denuncia)
    .subscribe(res => {
      
      console.log(res);
    });
  }

  enviarComentario(){
    this.serviceComentario.guardarComentario(this.formularioComentario)
      .subscribe((res: any) => {
      console.log(res);
    
      });
  }
}

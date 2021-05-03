import { Component, OnInit } from '@angular/core';
import { DenunciaService } from 'src/app/servicios/denuncia.service';


@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css']
})
export class DenunciasComponent implements OnInit {

  constructor(private denunciaService: DenunciaService) { }

  denuncias:any[] = [];

  ngOnInit(): void {
    this.obtenerDenuncias();
    
  }

  //OBTENER DENUNCIAS
  obtenerDenuncias(){
    this.denunciaService.obtenerDenuncias()
      .subscribe((res:any) =>{
         this.denuncias = res
      });
  }
}

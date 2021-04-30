import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';
import { CategoriaService } from '../../servicios/categoria.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  //Tipo de grafico que queremos: ejem: line, bar, radar
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  
  //Datos que vamos a cargar en las graficas 
  public barChartData: ChartDataSets[];
  public chartColors:any;

  private categoria:any;
  private dato:any ;
  //Arreglo de los datos que vamos a pasar
  private datos = [];
  //Arreglo de las categorias que vamos a pasar
  private nombreCategoria = [];
  //Arreglo de los colores que vamos a pasar
  private colores = [];

  constructor(protected categoriaService: CategoriaService) {
    this.getCategoria();
  }

  ngOnInit() {
  }

  getCategoria() {
    this.categoriaService.obtenerCategorias().subscribe(res => {
      this.categoria = res;
      //Obtenemos las categorias y recorremos almacenando 
      //en cada arreglo lo necesario
      for (const cate of this.categoria) {
        this.dato = cate.DATOS_CATE.split(',');
         this.datos.push(this.dato);
         this.nombreCategoria.push(cate.NOMBRE_CATE);
         this.colores.push(cate.COLOR_CATE);
      }
     
      //Llamado a función
      this.cargarDatos(this.datos, this.nombreCategoria, this.colores);
    });
  }

  //Función que carga los datos en la grafica, asi como los colores
  cargarDatos(datos:any, nombreCategoria:any, colores:any) {
    this.barChartData = [];
    this.chartColors = [];
    
    for (const index in datos) {
      this.barChartData.push({ data: datos[index], label: nombreCategoria[index] });
      this.chartColors.push({backgroundColor: colores[index]});
    }

  }

}
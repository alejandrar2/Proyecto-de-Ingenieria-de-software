import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { UsuarioService } from 'src/app/servicios/usuario.service';

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

  public barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: '' }
  ]

  constructor(private serviseUser: UsuarioService) { }
  ngOnInit() {
    this.obtenerUsuarios();

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  obtenerUsuarios() {
    let temp: any = [];
    let enero = 0;
    let febrero = 0;
    let marzo = 0;
    let abril = 0;
    let mayo = 0;
    let junio = 0;
    let julio = 0;
    let agosto = 0;
    let septiembre = 0;
    let octubre = 0;
    let noviembre = 0;
    let diciembre = 0;



    this.serviseUser.obtenerUsuarios().subscribe((data: any) => {
      console.log(data);


      data.forEach((item: any) => {
        let date = new Date(item.createdAt);
        let mes = date.getUTCMonth() + 1;
        console.log(mes)

        switch (mes) {
          case 1:
            enero++;
            break;
          case 2:
            febrero++;
            break;
          case 3:
            marzo++;
            break;
          case 4:
            abril++;
            break;
          case 5:
            mayo++;
            break;
          case 6:
            junio++;
            break;
          case 7:
            julio++;
            break;
          case 8:
            agosto++;
            break;
          case 9:
            septiembre++;
            break;
          case 10:
            octubre++;
            break;
          case 11:
            noviembre++;
            break;
          case 11:
            diciembre++;
            break
        }
      });

      enero = ((enero / data.length) * 100);
      febrero = ((febrero / data.length) * 100);
      marzo = ((marzo / data.length) * 100);
      abril = ((abril / data.length) * 100);
      mayo = ((mayo / data.length) * 100);
      junio = ((junio / data.length) * 100);
      julio = ((julio / data.length) * 100);
      agosto = ((agosto / data.length) * 100);
      septiembre = ((septiembre / data.length) * 100);
      octubre = ((octubre / data.length) * 100);
      noviembre = ((noviembre / data.length) * 100);
      diciembre = ((diciembre / data.length) * 100);


      this.barChartData.push({ data: [Number(enero), Number(febrero), Number(marzo), Number(abril), Number(mayo), Number(junio), Number(julio), Number(agosto), Number(septiembre), Number(octubre), Number(noviembre), Number(diciembre)], label: 'Usuarios' })

    });



  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
  }
}
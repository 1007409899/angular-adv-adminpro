import { Component, OnInit,Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Color, MultiDataSet } from "ng2-charts";
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

    @Input() titulo = 'sin titulo'
    @Input() labels:string[] = []
    @Input() data!:any ;
     // Doughnut


     public doughnutChartType: ChartType = 'doughnut';
    public colors:Color[]=[
      {backgroundColor: ['#242A33','#698BF2']}
    ]
     // events
     public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
       console.log(event, active);
     }

     public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
       console.log(event, active);
     }


}

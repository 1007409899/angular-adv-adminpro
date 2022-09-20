import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Color, MultiDataSet } from "ng2-charts";
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  // Doughnut
  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public labels2: string[] = [' Sales', ' Sales', ' Sales'];
  public data1 =
    [
      [350, 450, 100],

    ]

  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    { backgroundColor: ['#242A33', '#698BF2'] }
  ]


}

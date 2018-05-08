import {Input, Component, OnInit, OnChanges} from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chartData } from '../../shared/models/chartData';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() chartConfig: chartData[];
  chart: Chart;

  ngOnChanges(): void {
    this.chart = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        width: 300,
        height: 300,
        backgroundColor: 'transparent'
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 100
      },
      title: {
        text: 'Customer Satisfaction in January, 2018'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true,
          size: 150
        }
      },
      series: [{
        name: 'Brands',
        data: this.chartConfig
      }]
    });
  }

  ngOnInit(): void {
    console.log(this.chartConfig);

  }


}

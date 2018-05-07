import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  chart = new Chart({
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
      data: [
        {
          name: 'Nike',
          y: 61.41
        },
        {
          name: 'Adidas',
          y: 11.84
        },
        {
          name: 'Converse',
          y: 10.85
        },
        {
          name: 'Reebok',
          y: 4.18
        },
        {
          name: 'Puma',
          y: 7.05
        },
        {
          name: 'New Balance',
          y: 4.67
        },
      ]
    }]
  });
}

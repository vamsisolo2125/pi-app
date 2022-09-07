import { Component, OnInit } from '@angular/core';
// import * as HighCharts from 'highcharts';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.pieChartBrowser();
  }

  // pieChartBrowser() {
  //   HighCharts.chart('pieChart', {
  //     chart: {
  //       plotBackgroundColor: null,
  //       plotBorderWidth: null,
  //       plotShadow: false,
  //       type: 'pie'
  //     },
  //     title: {
  //       text: 'Browser market shares in October, 2019'
  //     },
  //     tooltip: {
  //       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //     },
  //     plotOptions: {
  //       pie: {
  //         allowPointSelect: true,
  //         cursor: 'pointer',
  //         dataLabels: {
  //           enabled: true,
  //           format: '<b>{point.name}</b>: {point.percentage:.1f} %'
  //         }
  //       }
  //     },
  //     series: [{
  //       name: 'Brands',
  //       colorByPoint: true,
  //       type: undefined,
  //       data: [{
  //         name: 'Chrome',
  //         y: 61.41,
  //         sliced: true,
  //         selected: true
  //       }, {
  //         name: 'Internet Explorer',
  //         y: 11.84
  //       }, {
  //         name: 'Firefox',
  //         y: 10.85
  //       }, {
  //         name: 'Edge',
  //         y: 4.67
  //       }, {
  //         name: 'Safari',
  //         y: 4.18
  //       }, {
  //         name: 'Sogou Explorer',
  //         y: 1.64
  //       }, {
  //         name: 'Opera',
  //         y: 1.6
  //       }, {
  //         name: 'QQ',
  //         y: 1.2
  //       }, {
  //         name: 'Other',
  //         y: 2.61
  //       }]
  //     }]
  //   });
  // }
}





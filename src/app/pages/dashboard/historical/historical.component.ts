import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Label, Color } from 'ng2-charts';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import * as Highcharts from 'highcharts';
import { StockChart } from 'angular-highcharts';
// declare var require: any;
// let Boost = require('highcharts/modules/boost');
// let noData = require('highcharts/modules/no-data-to-display');
// let More = require('highcharts/highcharts-more');

// Boost(Highcharts);
// noData(Highcharts);
// More(Highcharts);
// noData(Highcharts);



@Component({
  selector: 'ngx-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss'],
})
export class HistoricalComponent {
  stock: StockChart;
  stock2: StockChart;
  dataemo: any;
  // Highcharts: typeof Highcharts = Highcharts;
  ngOnInit() {
    this.http.get<any>('http://20.188.110.129:3000/gethistoricalemo').subscribe((res) => {
      console.log(res)
      // this.dataemo = res
      this.stock = new StockChart({
        rangeSelector: {
          selected: 4
        },
        credits: {
          enabled: false
        },

        // exporting: {
        //   buttons: {
        //       contextButton: {
        //           menuItems: [{
        //               textKey: 'downloadXLS',
        //               onclick: function () {
        //                   this.downloadXLS();
        //               }
        //           }, {
        //               textKey: 'downloadCSV',
        //               onclick: function () {
        //                   this.downloadCSV();
        //               }
        //           }]
        //       }
        //   }
        // },

        yAxis: {
          labels: {
            formatter: function () {
              return (this.value > 0 ? ' + ' : '') + this.value + '%';
            }
          },
          plotLines: [{
            value: 0,
            width: 2,
            color: 'silver'
          }]
        },
        xAxis: {
          type: 'datetime',
          gridLineWidth: 1,
          labels: {
            style: {
              fontSize: '12px'
            }
          }
        },
        plotOptions: {
          series: {
            compare: 'percent',
            showInNavigator: true
          }
        },

        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true
        },
        legend: {
          enabled: true
        },

        // series: [{ name: "Happy", data: []},
        // { name: "Happy", data: []},
        // { name: "Happy", data: []}]
        series: res
      });
    })

    this.http.get<any>('http://20.188.110.129:3000/gethistoricalcheckin').subscribe((res) => {
      console.log(res)
      // this.dataemo = res
      this.stock2 = new StockChart({
        rangeSelector: {
          selected: 4
        },
        credits: {
          enabled: false
        },

        // exporting: {
        //   buttons: {
        //       contextButton: {
        //           menuItems: [{
        //               textKey: 'downloadXLS',
        //               onclick: function () {
        //                   this.downloadXLS();
        //               }
        //           }, {
        //               textKey: 'downloadCSV',
        //               onclick: function () {
        //                   this.downloadCSV();
        //               }
        //           }]
        //       }
        //   }
        // },

        yAxis: {
          labels: {
            formatter: function () {
              return (this.value > 0 ? ' + ' : '') + this.value + '%';
            }
          },
          plotLines: [{
            value: 0,
            width: 2,
            color: 'silver'
          }]
        },
        xAxis: {
          type: 'datetime',
          gridLineWidth: 1,
          labels: {
            style: {
              fontSize: '12px'
            }
          }
        },
        plotOptions: {
          series: {
            compare: 'percent',
            showInNavigator: true
          }
        },

        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true
        },
        legend: {
          enabled: true
        },

        // series: [{ name: "Happy", data: []},
        // { name: "Happy", data: []},
        // { name: "Happy", data: []}]
        series: res
      });
    })
  }




  
  
  constructor(private http: HttpClient, private router: Router) {


    // this.http.get<any>('http://20.188.110.129:3000/countmeaprofile').subscribe((res) => { console.log(res) })



  }




}


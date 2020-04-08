import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Color } from 'ng2-charts';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError, tap } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {EmployeeComponent} from './popup/employee/employee.component'
import {AbsentComponent} from './popup/absent/absent.component'
import {LateComponent} from './popup/late/late.component'
import {OntimeComponent} from './popup/ontime/ontime.component'
import {OvertimeComponent} from './popup/overtime/overtime.component'


// import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent {
  empcount: number = 0;
  ontimecount: number = 0;
  latecount: number = 0;
  ansentcount: number = 0;
  overtimecount: number = 0;
  malecount: number = 0;
  femalecount: number = 0;
  maleentrycount: number = 0;
  femaleentrycount: number = 0;
  maleexitcount: number = 0;
  femaleexitcount: number = 0;

  bestemp: string = "";
  happyperson: string = "";
  mealover: string = "";

  bestempimg: string = "";
  happypersonimg: string = "";
  mealoverimg: string = "";
  public happy = [];
  public unhappy = [];
  public nuetural = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [

    { data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Happy' },
    // { data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Neutral' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Unhappy' }
  ];

  public ChartLabels = ['20-29', '30-39', '40-49', '50-59', '60+'];

  public maleBarChartData = [

    { data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Happy' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Neutral' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Unhappy' }
  ];

  public femaleBarChartData = [

    { data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Happy' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Neutral' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Unhappy' }
  ];

  public barChartColors: Color[] = [
    { backgroundColor: '#2993d9' },
    { backgroundColor: '#d93229' },
  ]


  public barChartColors2: Color[] = [
    { backgroundColor: '#32CD32' },

  ]

  public selectedVal: string;
  ngOnInit() {
    this.selectedVal = 'Overall';
  }

  public onValChange(val: string) {
    this.selectedVal = val;
    console.log("val", val)
    if (val == 'Overall') {
      this.http.get<any>('http://20.188.110.129:3000/getcountexitbygender/male').subscribe((res) => {
        this.malecount = res.entry + res.exit;
        this.maleentrycount = res.entry;
        this.maleexitcount = res.exit;
      })

      this.http.get<any>('http://20.188.110.129:3000/getcountexitbygender/female').subscribe((res) => {
        this.femalecount = res.entry + res.exit;
        this.femaleentrycount = res.entry;
        this.femaleexitcount = res.exit;
      })

      this.http.get<any>('http://20.188.110.129:3000/getgrapghagebygender/male').subscribe((res) => {
        // this.happy = [];
        let resdata = [];
        // this.nuetural = [];
        console.log(res)
        res.forEach((element) => {
          resdata.push(element.count);

        })
        this.maleBarChartData = [
          { data: resdata, label: 'Count' }
        ];

      });

      this.http.get<any>('http://20.188.110.129:3000/getgrapghagebygender/female').subscribe((res) => {
        // this.happy = [];
        let resdata = [];
        // this.nuetural = [];
        console.log(res)
        res.forEach((element) => {
          resdata.push(element.count);

        })
        this.femaleBarChartData = [
          { data: resdata, label: 'Count' }
        ];

      });
    } else if (val == 'Happy') {
      this.http.get<any>('http://20.188.110.129:3000/getcountexitbygender/male/happy').subscribe((res) => {
        console.log(res);
        this.malecount = res.entry + res.exit;
        this.maleentrycount = res.entry;
        this.maleexitcount = res.exit;
      })

      this.http.get<any>('http://20.188.110.129:3000/getcountexitbygender/female/happy').subscribe((res) => {
        console.log(res);
        this.femalecount = res.entry + res.exit;
        this.femaleentrycount = res.entry;
        this.femaleexitcount = res.exit;
      })
      this.http.get<any>('http://20.188.110.129:3000/getgrapghagebygender/male/happy').subscribe((res) => {
        // this.happy = [];
        let resdata = [];
        // this.nuetural = [];
        console.log(res)
        res.forEach((element) => {
          resdata.push(element.count);

        })
        this.maleBarChartData = [
          { data: resdata, label: 'Count' }
        ];

      });

      this.http.get<any>('http://20.188.110.129:3000/getgrapghagebygender/female/happy').subscribe((res) => {
        // this.happy = [];
        let resdata = [];
        // this.nuetural = [];
        console.log(res)
        res.forEach((element) => {
          resdata.push(element.count);

        })
        this.femaleBarChartData = [
          { data: resdata, label: 'Count' }
        ];

      });
    } else if (val == 'Unhappy') {

      this.http.get<any>('http://20.188.110.129:3000/getcountexitbygender/male/unhappy').subscribe((res) => {
        console.log(res);
        this.malecount = res.entry + res.exit;
        this.maleentrycount = res.entry;
        this.maleexitcount = res.exit;
      })

      this.http.get<any>('http://20.188.110.129:3000/getcountexitbygender/female/unhappy').subscribe((res) => {
        console.log(res);
        this.femalecount = res.entry + res.exit;
        this.femaleentrycount = res.entry;
        this.femaleexitcount = res.exit;
      })
      this.http.get<any>('http://20.188.110.129:3000/getgrapghagebygender/male/unhappy').subscribe((res) => {
        // this.happy = [];
        let resdata = [];
        // this.nuetural = [];
        console.log(res)
        res.forEach((element) => {
          resdata.push(element.count);

        })
        this.maleBarChartData = [
          { data: resdata, label: 'Count' }
        ];

      });

      this.http.get<any>('http://20.188.110.129:3000/getgrapghagebygender/female/unhappy').subscribe((res) => {
        // this.happy = [];
        let resdata = [];
        // this.nuetural = [];
        console.log(res)
        res.forEach((element) => {
          resdata.push(element.count);

        })
        this.femaleBarChartData = [
          { data: resdata, label: 'Count' }
        ];

      });


    } else if (val == 'Neutral') {

      this.http.get<any>('http://20.188.110.129:3000/getcountexitbygender/male/neutral').subscribe((res) => {
        this.malecount = res.entry + res.exit;
        this.maleentrycount = res.entry;
        this.maleexitcount = res.exit;
      })

      this.http.get<any>('http://20.188.110.129:3000/getcountexitbygender/female/neutral').subscribe((res) => {
        this.femalecount = res.entry + res.exit;
        this.femaleentrycount = res.entry;
        this.femaleexitcount = res.exit;
      })
      this.http.get<any>('http://20.188.110.129:3000/getgrapghagebygender/male/neutral').subscribe((res) => {
        // this.happy = [];
        let resdata = [];
        // this.nuetural = [];
        console.log(res)
        res.forEach((element) => {
          resdata.push(element.count);

        })
        this.maleBarChartData = [
          { data: resdata, label: 'Count' }
        ];

      });

      this.http.get<any>('http://20.188.110.129:3000/getgrapghagebygender/female/neutral').subscribe((res) => {
        // this.happy = [];
        let resdata = [];
        // this.nuetural = [];
        console.log(res)
        res.forEach((element) => {
          resdata.push(element.count);

        })
        this.femaleBarChartData = [
          { data: resdata, label: 'Count' }
        ];

      });



    }
  }

  empDialog(): void {
    const dialogRef = this.dialog.open(EmployeeComponent, {
      width: '300px',
      data: {}
    });

    // dialogRef.afterClosed().subscribe(result => {
      // this.email = result;
    // });
  }

  absentDialog(): void {
    const dialogRef = this.dialog.open(AbsentComponent, {
      width: '300px',
      data: {}
    });

  }
  lateDialog(): void {
    const dialogRef = this.dialog.open(LateComponent, {
      width: '300px',
      data: {}
    });

  }
  ontimeDialog(): void {
    const dialogRef = this.dialog.open(OntimeComponent, {
      width: '300px',
      data: {}
    });

  }
  overtimeDialog(): void {
    const dialogRef = this.dialog.open(OvertimeComponent, {
      width: '300px',
      data: {}
    });

  }

  constructor(private http: HttpClient, private router: Router ,public dialog: MatDialog) {


    this.http.get<any>('http://20.188.110.129:3000/countmeaprofile').subscribe((res) => { this.empcount = res; })
    this.http.get<any>('http://20.188.110.129:3000/getcountlate').subscribe((res) => {
      this.ontimecount = res.ontime;
      this.latecount = res.late;
      this.ansentcount = res.absence;
      this.overtimecount = res.overtime;
    })
    this.http.get<any>('http://20.188.110.129:3000/getcountexitbygender/male').subscribe((res) => {
      this.malecount = res.entry + res.exit;
      this.maleentrycount = res.entry;
      this.maleexitcount = res.exit;
    })

    this.http.get<any>('http://20.188.110.129:3000/getcountexitbygender/female').subscribe((res) => {
      this.femalecount = res.entry + res.exit;
      this.femaleentrycount = res.entry;
      this.femaleexitcount = res.exit;
    })


    this.http.get<any>('http://20.188.110.129:3000/getemograph').subscribe((emotion) => {
      this.happy = [];
      this.unhappy = [];
      // this.nuetural = [];
      console.log(emotion)
      emotion.forEach((element) => {
        this.happy.push(element.happy);
        // this.unhappy.push(element.unhappy);
        this.unhappy.push((element.unhappy));
      })
      this.barChartData = [
        { data: this.happy, label: 'Happy' },
        // {data: this.nuetural, label: 'Neutral'},
        { data: this.unhappy, label: 'Unhappy' }
      ];

    });


    this.http.get<any>('http://20.188.110.129:3000/getgrapghagebygender/male').subscribe((res) => {
      // this.happy = [];
      let resdata = [];
      // this.nuetural = [];
      console.log(res)
      res.forEach((element) => {
        resdata.push(element.count);

      })
      this.maleBarChartData = [
        { data: resdata, label: 'Count' }
      ];

    });

    this.http.get<any>('http://20.188.110.129:3000/getgrapghagebygender/female').subscribe((res) => {
      // this.happy = [];
      let resdata = [];
      // this.nuetural = [];
      console.log(res)
      res.forEach((element) => {
        resdata.push(element.count);

      })
      this.femaleBarChartData = [
        { data: resdata, label: 'Count' }
      ];

    });

    this.http.get<any>('http://20.188.110.129:3000/getmonthlyemo').subscribe((gethappy) => {
      this.http.get<any>('http://20.188.110.129:3000/getmonthlyontime').subscribe((getontime) => {
        this.http.get<any>('http://20.188.110.129:3000/getmonthlyovertime').subscribe((getovertime) => {
          this.http.get<any>('http://20.188.110.129:3000/getmeaprofile').subscribe((getmeaprofile) => {
            // this.happy = [];
            // let resdata = [];
            let bestemp = {};
            let happy = {};
            let MEAlover = {};
            Object.keys(getovertime).forEach((element) => {
              if (bestemp[element] == null) bestemp[element] = getovertime[element];
              else bestemp[element] += getovertime[element];

              if (MEAlover[element] == null) MEAlover[element] = gethappy[element];
              else MEAlover[element] += gethappy[element];
            })
            Object.keys(getontime).forEach((element) => {
              if (bestemp[element] == null) bestemp[element] = getontime[element];
              else bestemp[element] += getontime[element];
            })

            Object.keys(gethappy).forEach((element) => {
              if (happy[element] == null) happy[element] = gethappy[element];
              else happy[element] += gethappy[element];

              if (MEAlover[element] == null) MEAlover[element] = gethappy[element];
              else MEAlover[element] += gethappy[element];

            })
            var bestemphighestVal = Math.max.apply(null, Object.values(bestemp)),
              bestempval = Object.keys(bestemp).find(function (a) {
                return bestemp[a] === bestemphighestVal;
              });

            var happyhighestVal = Math.max.apply(null, Object.values(happy)),
              happyval = Object.keys(happy).find(function (a) {
                return happy[a] === happyhighestVal;
              });

            var MEAloverhighestVal = Math.max.apply(null, Object.values(MEAlover)),
              MEAloverval = Object.keys(MEAlover).find(function (a) {
                return MEAlover[a] === MEAloverhighestVal;
              });

            getmeaprofile.forEach((element) => {
              if (element.id == bestempval) {
                this.bestemp = bestempval;
                this.bestempimg = element.image;
              }
              if (element.id == happyval) {
                this.happyperson = happyval;
                this.happypersonimg = element.image;
              }
              if (element.id == MEAloverval) {
                this.mealover = MEAloverval;
                this.mealoverimg = element.image;
              }

            })
            // console.log("bestemp", MEAloverval);
          });
        });
      });
    });


  }
  // deleteRow(id){
  //   this.http.delete<any>('http://20.188.110.129:3000/deletemeaprofile/'+id,{}).subscribe((delet) => { 
  //     this.http.get<any[]>('http://20.188.110.129:3000/getmeaprofile').subscribe((res) => { })
  //    })

  // }
  // editRow(id){
  //   this.router.navigate(['/pages/tables/tree-grid2'], { queryParams:{id: id}});

  // }


}

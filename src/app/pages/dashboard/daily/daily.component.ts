import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Color } from 'ng2-charts';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError, tap } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeComponent } from './popup/employee/employee.component'
import { AbsentComponent } from './popup/absent/absent.component'
import { LateComponent } from './popup/late/late.component'
import { OntimeComponent } from './popup/ontime/ontime.component'
import { OvertimeComponent } from './popup/overtime/overtime.component'
import { EmoComponent } from './popup/emo/emo.component'


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
  emoicon: string = "all";

  bestemp: string = "";
  happyperson: string = "";
  mealover: string = "";
  rate: number = 3;

  bestempimg: string = "";
  happypersonimg: string = "";
  mealoverimg: string = "";

  bestempname: string = "";
  happypersonname: string = "";
  mealovername: string = "";

  bestempin: string = "";
  mealoverin: string = "";

  bestempout: string = "";
  mealoverout: string = "";

  bestemphour: string = "";
  mealoverhour: string = "";

  bestemphap: string = "";
  mealoverhap: string = "";

  public happy = [];
  public unhappy = [];
  public nuetural = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //public barChartLabels = ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
  public barChartLabels = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [

    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Happy ' },
    // { data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Neutral' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Unhappy ' }
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
    { backgroundColor: 'rgba(255, 119, 1, 0.6)', borderColor: 'rgba(255, 119, 1, 0.9)', borderWidth: 0.8, hoverBackgroundColor: 'rgba(255, 119, 1, 0.75)', },
    { backgroundColor: 'rgba(125, 125, 125, 0.5)', borderColor: 'rgba(125, 125, 125, 0.9)', borderWidth: 0.8, hoverBackgroundColor: 'rgba(125, 125, 125, 0.75)' },
  ]


  public barChartColors1: Color[] = [
    { backgroundColor: 'rgba(22, 92, 188, 0.6)', borderColor: 'rgba(22, 92, 188, 0.9)', borderWidth: 0.8, hoverBackgroundColor: 'rgba(22, 92, 188, 0.9)' },

  ]

  public barChartColors2: Color[] = [
    { backgroundColor: 'rgba(235, 71, 70, 0.6)', borderColor: 'rgba(235, 71, 70, 0.9)', borderWidth: 0.8, hoverBackgroundColor: 'rgba(235, 71, 70, 0.9)' },

  ]

  public selectedVal: string;
  ngOnInit() {
    this.selectedVal = 'Overall';
  }

  public onValChange(val: string) {
    this.selectedVal = val;
    console.log("val", val)
    if (val == 'Overall') {
      this.emoicon = "all";
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
      this.emoicon = "happy";
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
      this.emoicon = "unhappy";
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
      this.emoicon = "neutral";
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

  emoDialog(gender): void {
    const dialogRef = this.dialog.open(EmoComponent, {
      width: '500px',
      data: { emo: this.selectedVal, gender: gender }
    });

    // dialogRef.afterClosed().subscribe(result => {
    // this.email = result;
    // });
  }

  empDialog(): void {
    const dialogRef = this.dialog.open(EmployeeComponent, {
      width: '500px',
      data: {}
    });

    // dialogRef.afterClosed().subscribe(result => {
    // this.email = result;
    // });
  }

  absentDialog(): void {
    const dialogRef = this.dialog.open(AbsentComponent, {
      width: '500px',
      data: {}
    });

  }
  lateDialog(): void {
    const dialogRef = this.dialog.open(LateComponent, {
      width: '500px',
      data: {}
    });

  }
  ontimeDialog(): void {
    const dialogRef = this.dialog.open(OntimeComponent, {
      width: '500px',
      data: {}
    });

  }
  overtimeDialog(): void {
    const dialogRef = this.dialog.open(OvertimeComponent, {
      width: '500px',
      data: {}
    });

  }

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog) {


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
        { data: this.happy, label: ':) Happy' },
        // {data: this.nuetural, label: 'Neutral'},
        { data: this.unhappy, label: ':( Unhappy' }
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

    this.http.get<any>('http://20.188.110.129:3000/getdailyhappy').subscribe((gethappy) => {
      this.http.get<any>('http://20.188.110.129:3000/getdailyworktime').subscribe((getworktime) => {
        this.http.get<any>('http://20.188.110.129:3000/getmeaprofile').subscribe((getmeaprofile) => {
          this.http.get<any>('http://20.188.110.129:3000/getcheckin').subscribe((getcheckin) => {
            // this.happy = [];
            // let resdata = [];
            let bestemp = {};
            let happy = {};
            let MEAlover = {};


            Object.keys(gethappy).forEach((element) => {
              if (happy[element] == null) happy[element] = gethappy[element];
              else happy[element] += gethappy[element];

              if (MEAlover[element] == null) MEAlover[element] = gethappy[element];
              else MEAlover[element] += gethappy[element];

            })

            Object.keys(getworktime).forEach((element) => {
              if (bestemp[element] == null) bestemp[element] = getworktime[element];
              else bestemp[element] += getworktime[element];

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
                this.bestempname = element.name + " " +element.surname;
                this.bestemp = bestempval;
                this.bestempimg = element.image;
              }
              if (element.id == happyval && happyhighestVal != 0) {
                this.happypersonname = element.name + " " +element.surname;
                this.happyperson = happyval;
                this.happypersonimg = element.image;
                if (happyhighestVal >= 750) this.rate = 5;
                else if (happyhighestVal >= 600) this.rate = 4;
                else if (happyhighestVal >= 400) this.rate = 3;
                else if (happyhighestVal >= 200) this.rate = 2;
                else this.rate = 1;

              }
              if (element.id == MEAloverval) {
                this.mealovername = element.name + " " +element.surname;
                this.mealover = MEAloverval;
                this.mealoverimg = element.image;
              }
            });

            getcheckin.forEach((element) => {
              if (element.id == bestempval) {
                this.bestempin = element.checkin;
                this.bestempout = element.checkout;
                let hap = ((element.checkinEmotion.emotion.happiness + element.checkinEmotion.emotion.surprise)*100 + (element.checkoutEmotion.emotion.happiness + element.checkoutEmotion.emotion.surprise)*200)/2;
                if(hap > 100) hap = 100;
                this.bestemphap = hap +"%";
                this.bestemphour = ( bestemphighestVal/60) +"."+ ("0" + ( bestemphighestVal%60)).slice(-2);
              }
             
              if (element.id == MEAloverval) {
                this.mealoverin = element.checkin;
                this.mealoverout = element.checkout;
                let hap = ((element.checkinEmotion.emotion.happiness + element.checkinEmotion.emotion.surprise)*100 + (element.checkoutEmotion.emotion.happiness + element.checkoutEmotion.emotion.surprise)*200)/2;
                if(hap > 100) hap = 100;
                this.mealoverhap = hap +"%";
                this.mealoverhour = (  getworktime[MEAloverval]/60) +"."+ ("0" + ( getworktime[MEAloverval]%60)).slice(-2);
              }
            });
          });
          // console.log("bestemp", MEAloverval);
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

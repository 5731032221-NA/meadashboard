import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HttpClient } from '@angular/common/http';

import { NgxSpinnerService } from "ngx-spinner";
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { TrainComponent } from '../train/train.component'

@Component({
  selector: 'info-modal',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  // displayedColumns = ['No.','ID', 'First Name - Last Name', 'Profile Picture'];
  dataSource: any[];
  p2: number = 1;
  itemsPerPage2: number = 10;
  title: string;
  name: string;
  surname: string;
  profileimage: any;
  listmea: any[];
  data: any;

  model: NgbDateStruct;
  date: { year: number, month: number };
  // absoluteIndex(indexOnPage: number): number {
  //   return this.itemsPerPage * (this.p - 1) + indexOnPage;
  // }

  constructor(
    private calendar: NgbCalendar,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    public dialog: MatDialog) {
    this.spinner.show();
    this.http.get<any[]>('http://20.188.110.129:3000/getcropinfobydate/' + '2020-05-22').subscribe((cropinfo) => {

      this.http.get<any[]>('http://20.188.110.129:3000/getmeaprofile').subscribe(profile => {



        cropinfo.forEach((element) => {

          this.http.get<any[]>('http://20.188.110.129:3000/getcropimage/' + element.name).subscribe((image) => {

            element['image1'] = 'data:image/jpg;base64,' + image['data'];


          })

          if (element.detected != "") {
            profile.forEach((pr) => {
              if (element.detected == pr.id) {
                element['title'] = pr.title;
                element['nameem'] = pr.name;
                element['surname'] = pr.surname;
                element['per'] = "(" + (element.confidence * 100) + "%)";
              }

            })
          }
        })


        this.listmea = [{ 'name': "เลือกพนักงาน -" }, ...profile];
        this.dataSource = cropinfo;
        // console.log("aa", this.dataSource);
        this.spinner.hide();
      })
    })
  }

  selectToday() {
    this.model = this.calendar.getToday();

  }

  trainDialog(id, name, title, nameem, surname, rowid): void {
    const dialogRef = this.dialog.open(TrainComponent, {
      width: '820px',
      data: { id, name, title, nameem, surname, rowid }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.http.get<any[]>('http://20.188.110.129:3000/getcropinfobydate/' + '2020-05-22').subscribe((cropinfo) => {

        this.http.get<any[]>('http://20.188.110.129:3000/getmeaprofile').subscribe(profile => {



          cropinfo.forEach((element) => {

            this.http.get<any[]>('http://20.188.110.129:3000/getcropimage/' + element.name).subscribe((image) => {

              element['image1'] = 'data:image/jpg;base64,' + image['data'];


            })

            if (element.detected != "") {
              profile.forEach((pr) => {
                if (element.detected == pr.id) {
                  element['title'] = pr.title;
                  element['nameem'] = pr.name;
                  element['surname'] = pr.surname;
                  element['per'] = "(" + (element.confidence * 100) + "%)";
                }

              })
            }
          })


          this.listmea = [{ 'name': "เลือกพนักงาน -" }, ...profile];
          this.dataSource = cropinfo;
          // console.log("aa", this.dataSource);
          this.spinner.hide();
        })
      })

    });
  }


  ngOnInit() {
  }
}

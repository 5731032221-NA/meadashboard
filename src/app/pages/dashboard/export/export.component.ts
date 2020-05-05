import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'ngx-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss'],
})
export class ExportComponent {
  // data: any = [{
  //   eid: 'e101',
  //   ename: 'ravi',
  //   esal: 1000
  // }, {
  //   eid: 'e102',
  //   ename: 'ram',
  //   esal: 2000
  // }, {
  //   eid: 'e103',
  //   ename: 'rajesh',
  //   esal: 3000
  // }];


  displayedColumns = ['ID', 'First Name - Last Name', 'Gender', 'Age','Walk-In Time','Walk-In Emotion','Walk-Out Time','Walk-Out Emotion'];
  dataSource: any[];
  p: number = 1;


  ngOnInit() {
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  exportAsXLSX(): void {
    this.exportAsExcelFile(this.dataSource, 'sample');
  }

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<any[]>('http://20.188.110.129:3000/getmeaprofile').subscribe((profile) => {
      this.http.get<any[]>('http://20.188.110.129:3000/getcheckin').subscribe((checkin) => {
        checkin.forEach((element) => {

          if(element.checkout == ''){
            element.checkout =  '-';
            element.checkoutEmo =  '-';
          }
          profile.forEach((element2) => {

            if(element.id == element2.id){
              element['title'] = element2.title;
              element['name'] = element2.name;
              element['surname'] = element2.surname;
            }
  
          })

        })
        this.dataSource = checkin;
      })
    })

    // this.http.get<any>('http://20.188.110.129:3000/countmeaprofile').subscribe((res) => { console.log(res) })


  }




}


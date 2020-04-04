import { Router } from '@angular/router';
import { Component } from '@angular/core';
// import { LocalDataSource } from 'ng2-smart-table';

// import { SmartTableData } from '../../../@core/data/smart-table';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
// import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss'],
})
export class SmartTableComponent {
  displayedColumns = ['รหัสพนักงาน', 'ชื่อ-สกุล', 'อีเมล', 'imageUrl',""];
  dataSource: any[];
  p: number = 1;
  
  evaIcons = [];

  constructor(private http: HttpClient,private router: Router) {

    this.http.get<any[]>('http://20.188.110.129:3000/getmeaprofile').subscribe((res) => { this.dataSource = res })
    // this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
    //   .filter(icon => icon.indexOf('outline') === -1);
    // iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
    }
  deleteRow(id){
    this.http.delete<any>('http://20.188.110.129:3000/deletemeaprofile/'+id,{}).subscribe((delet) => { 
      this.http.get<any[]>('http://20.188.110.129:3000/getmeaprofile').subscribe((res) => { this.dataSource = res })
     })

  }
  editRow(id){
    this.router.navigate(['/pages/tables/tree-grid2'], { queryParams:{id: id}});

  }


 }

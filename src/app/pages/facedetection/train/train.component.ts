import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
interface DialogData {
  id: string;
  name: string;
  title: string;nameem: string;surname: string;
  rowid: string;
}

const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});
const httpHeaders2 = new HttpHeaders({
  // 'Content-Type' : 'multipart/form-data'
});
const options = {
  headers: httpHeaders
};




@Component({
  selector: 'ngx-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss'],
})
export class TrainComponent {


  pic: any;

  constructor(
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<TrainComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.http.get<any[]>('http://20.188.110.129:3000/getcropimage/' + this.data.name).subscribe((done) => {
     
        this.pic = 'data:image/jpg;base64,' + done['data'];
      })


  }

  ngOnInit(): any {

    


  }



  onSubmit() {
    this.http.get<any[]>('http://20.188.110.129:3000/traincropimage/' + this.data.name+'/'+this.data.id+'/'+this.data.rowid).subscribe((done) => {
     
      this.dialogRef.close()
    })


  }

  
 

}


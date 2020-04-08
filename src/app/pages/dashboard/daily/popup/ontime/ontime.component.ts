import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient } from '@angular/common/http';
interface DialogData {
  email: string;
}

@Component({
  selector: 'ontime-modal',
  templateUrl: './ontime.component.html',
  styleUrls: ['./ontime.component.css']
})
export class OntimeComponent implements OnInit {

  displayedColumns = ['รหัสพนักงาน', 'ชื่อ-สกุล','เวลาเข้างาน'];
  dataSource: any[];
  

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<OntimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.http.get<any[]>('http://20.188.110.129:3000/getmeaontime').subscribe((res) => { this.dataSource = res })
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}

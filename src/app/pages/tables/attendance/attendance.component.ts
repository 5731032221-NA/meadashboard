import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
interface DialogData {
  id: string;
}

@Component({
  selector: 'attendance-modal',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {


  // displayedColumns = ['No.','ID', 'First Name - Last Name', 'Profile Picture'];
  dataSource: any[];
  p: number = 1;
  itemsPerPage: number = 10;
  title: string;
  name: string;
  surname: string;
  profileimage: any;
  // absoluteIndex(indexOnPage: number): number {
  //   return this.itemsPerPage * (this.p - 1) + indexOnPage;
  // }

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<AttendanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.http.get<any[]>('http://20.188.110.129:3000/getmeaprofilebyid/' + data.id).subscribe((profile) => {
      this.title = profile[0].title;
      this.name = profile[0].name;
      this.surname = profile[0].surname;
      this.profileimage = 'data:image/jpg;base64,' + profile[0].encimage;
      this.http.get<any[]>('http://20.188.110.129:3000/attendance/' + data.id).subscribe((attendance) => {

        attendance.forEach((element) => {
          this.http.get<any[]>('http://20.188.110.129:3000/getcropimage/' + element.checkinImageCrop).subscribe((image) => {
            element['image1'] = 'data:image/jpg;base64,' + image['data'];
            if (element.checkoutdatetime! = '') {
              this.http.get<any[]>('http://20.188.110.129:3000/getcropimage/' + element.checkoutImageCrop).subscribe((image2) => {
                element['image2'] = 'data:image/jpg;base64,' + image2['data'];



              })
            }


          })


          
        })
        this.dataSource = attendance;
      })
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}

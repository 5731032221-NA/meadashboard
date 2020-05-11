import { Component, Input, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { ActivatedRoute } from '@angular/router';
const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});
const options = {
  headers: httpHeaders
};
interface DialogData {
}






@Component({
  selector: 'ngx-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  username: string = '';
  password: string = '';
  Obj: any;
  // evaIcons = [];
  checkoutForm;

  constructor(

    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });

  }


  addTodo(event) {
    console.log("event", event);
    this.Obj = {
      username: event.username,
      password: Md5.hashStr(event.password)
    }
    // console.log(this.Obj);

    this.http.post<any>('http://20.188.110.129:3000/postaccount', this.Obj, options).subscribe(done => {
      this.dialogRef.close();
    })

  }



}


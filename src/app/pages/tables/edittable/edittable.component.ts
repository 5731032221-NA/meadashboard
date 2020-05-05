import { Component, Input, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { AES,enc } from 'crypto-js';
import { ActivatedRoute } from '@angular/router';
interface DialogData {
  id: string;
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
  selector: 'ngx-edittable',
  templateUrl: './edittable.component.html',
  styleUrls: ['./edittable.component.scss'],
})
export class EditTableComponent {

  items;
  checkoutForm;
  imageFile: File
  dataSource: any[];
  myDefaultValue: String = "a"

  constructor(
    
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<EditTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData)
   {
    this.checkoutForm = this.formBuilder.group({
      // id: '',
      title: '',
      name: '',
      surname: '',
      position: '',
      email: '',
    });


  }

  ngOnInit(): any {

    this.route.queryParams.subscribe(params => {
      // console.log("params",params);
      this.http.get<any[]>('http://20.188.110.129:3000/getmeaprofile/' + this.data.id).subscribe((res) => {
        this.myDefaultValue = res[0].id
        this.checkoutForm = this.formBuilder.group({
          // id: res[0].id,
          title: res[0].title,
          name: res[0].name,
          surname: res[0].surname,
          position: res[0].position,
          email: res[0].email,
        });
      })
    })


  }



  // onSubmit(customerData) {
  //   let formData: any = new FormData();

  //   // formData.append('photo', this.imageFile);
  //   // let options2 = {
  //   //   // method: 'POST',
  //   //   // body: formData,
  //   //   headers: httpHeaders2,
  //   // };

  //   this.checkoutForm.reset();
  //    this.route.queryParams.subscribe(params => {
  //     this.http.post<any>('http://20.188.110.129:3000/postmeaprofile/' + this.data.id, customerData, options).subscribe(done => console.log(done))
  //   });
  //    this.dialogRef.close();

   
  // }

  onSubmitPic() {
    // let formData: any = new FormData();

    // formData.append('photo', this.imageFile);
    // let options2 = {
    //   // method: 'POST',
    //   // body: formData,
    //   headers: httpHeaders2,
    // };
    const reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
        // console.log("reader",reader.result);
        // var ciphertext2 = AES.encrypt(reader.result, 'meaprofilepic').toString(enc.Utf8)
        var text = reader.result.toString().substring(23);
        var ciphertext = AES.encrypt(text, 'meaprofilepic').toString();
        // this.route.queryParams.subscribe(params => {
          // console.log("ciphertext2",ciphertext2);  
        // console.log("ciphertext",ciphertext);
          this.http.post<any>('http://20.188.110.129:3000/postmeapic/' + this.data.id, {'image': ciphertext}, options).subscribe(done => 
          
          this.dialogRef.close()
         
          )
        // });
         
    };
    

    // this.checkoutForm.reset();
    

   
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  onFileChanged(event) {
    this.imageFile = event.target.files[0]
  }



}


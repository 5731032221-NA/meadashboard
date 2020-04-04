import { Component, Input } from '@angular/core';
// import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { FormBuilder } from '@angular/forms';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';


const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});
const httpHeaders2 = new HttpHeaders({
  // 'Content-Type' : 'multipart/form-data'
});
const options = {
  headers: httpHeaders
};

// import { BlobService, UploadConfig, UploadParams } from 'angular-azure-blob-service'
// interface TreeNode<T> {
//   data: T;
//   children?: TreeNode<T>[];
//   expanded?: boolean;
// }

// interface FSEntry {
//   name: string;
//   size: string;
//   kind: string;
//   items?: number;
// }



@Component({
  selector: 'ngx-edittable',
  templateUrl: './edittable.component.html',
  styleUrls: ['./edittable.component.scss'],
})
export class TreeGridComponent {

  items;
  checkoutForm;
  imageFile: File
  dataSource: any[];
  myDefaultValue: String = "a"

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
    // private blob: BlobService,
    // private Config: UploadParams = {
    //   sas: '?sv=2019-02-02&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-03-12T13:54:45Z&st=2020-03-12T05:54:45Z&spr=https&sig=LU0kQzzSgGKBEE6n4jsx0la7P%2BKdPYW%2FNstCz%2BhppZY%3D',
    //   storageAccount: 'oneteamblob',
    //   containerName: 'meapicture'
    // }

  ) {
    this.checkoutForm = this.formBuilder.group({
      // id: '',
      title: '',
      name: '',
      surname: '',
      email: '',
    });


  }

  ngOnInit(): any {

    this.route.queryParams.subscribe(params => {
      // console.log("params",params);
      this.http.get<any[]>('http://20.188.110.129:3000/getmeaprofile/' + params.id).subscribe((res) => {
        this.myDefaultValue = res[0].id
        this.checkoutForm = this.formBuilder.group({
          // id: res[0].id,
          title: res[0].title,
          name: res[0].name,
          surname: res[0].surname,
          email: res[0].email,
        });
      })
    })

    // var a = this.route.paramMap.pipe(
    //   map(params => {
    //     console.log("params",params);
    //     this.http.get<any[]>('http://20.188.110.129:3000/getmeaprofile/' + params.get('id')).subscribe((res) => {
    //       this.myDefaultValue = res[0].id
    //       this.checkoutForm = this.formBuilder.group({
    //         id: res[0].id,
    //         title: res[0].title,
    //         name: res[0].name,
    //         surname: res[0].surname,
    //         email: res[0].email,
    //       });
    //     })
    //   })
    // );

  }


  onSubmit(customerData) {
    let formData: any = new FormData();

    formData.append('photo', this.imageFile);
    let options2 = {
      // method: 'POST',
      // body: formData,
      headers: httpHeaders2,
    };

    // customerData.image = "https://oneteamblob.blob.core.windows.net/meapicture/" + "11011" + ".jpg";
    this.checkoutForm.reset();
    // console.log(customerData.name)
    // this.http.post<any>('http://20.188.110.129:3000/uploadid/' + customerData.id, {}).subscribe(uploadid =>
    //   this.http.post<any>('http://20.188.110.129:3000/upload', formData, options2).subscribe(upload =>
    this.route.queryParams.subscribe(params => {
      this.http.post<any>('http://20.188.110.129:3000/postmeaprofile/' + params.id, customerData, options).subscribe(done => console.log(done))
      // ));
    });

    // let a = this.http.post<any>('http://20.188.110.129:3000/postmeaprofile',customerData,options).subscribe(hero => console.log(hero));

    // if (this.imageFile !== null) {
    //   const baseUrl = this.blob.generateBlobUrl(this.Config, this.imageFile.name);
    //   let config = {
    //     baseUrl: baseUrl,
    //     sasToken: this.Config.sas,
    //     blockSize: 1024 * 64, // OPTIONAL, default value is 1024 * 32
    //     file: this.imageFile,
    //     complete: () => {
    //       console.log('Transfer completed !');
    //     },
    //     error: (err) => {
    //       console.log('Error:', err);
    //     },

    //   };
    //   this.blob.upload(config);
    // }

    // console.warn('Your order has been submitted', customerData);
  }

  onFileChanged(event) {
    this.imageFile = event.target.files[0]
  }



}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}

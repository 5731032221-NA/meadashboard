import { NgModule } from '@angular/core';
import {NbSelectModule,NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './dashboard-routing.module';
// import { FsIconComponent } from './tree-grid/tree-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { BlobModule } from 'angular-azure-blob-service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatDialogModule, MatButtonModule } from '@angular/material';
// import {EmployeeComponent} from './daily/popup/employee/employee.component'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './daily/popup/employee/employee.component';
import { AbsentComponent } from './daily/popup/absent/absent.component';
import { LateComponent } from './daily/popup/late/late.component';
import { OntimeComponent } from './daily/popup/ontime/ontime.component';
import { OvertimeComponent } from './daily/popup/overtime/overtime.component';


@NgModule({
  imports: [
    NbSelectModule,
    NbButtonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    // Ng2SmartTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ChartsModule,
    // BrowserAnimationsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatButtonModule,
    // EmployeeComponent,
    // BlobModule,
  ],
  declarations: [
    ...routedComponents,
    EmployeeComponent,
    AbsentComponent,
    OntimeComponent,
    LateComponent,
    OvertimeComponent
  ],
  entryComponents: [EmployeeComponent,AbsentComponent,
    OntimeComponent,
    LateComponent,
    OvertimeComponent],
})
export class DashboardModule { }

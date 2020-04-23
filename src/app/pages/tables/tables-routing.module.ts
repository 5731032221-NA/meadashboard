import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent as s1 } from './tabledata/tabledata.component';
import { TreeGridComponent as t1 } from './inserttable/inserttable.component';




const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: s1,
    },
    {
      path: 'tree-grid',
      component: t1,
    }
   
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  s1,
  t1
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DailyComponent as d1} from './daily/daily.component';
import { DailyComponent as d2} from './dailymock/daily.component';



const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'daily',
      component: d1,
    },
    {
      path: 'dailymock',
      component: d2,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  DashboardComponent,
  d1,d2,
];

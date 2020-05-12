import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent} from './auth.component';
import { LoginComponent as s1 } from './login/login.component';
// import { NotificationComponent as t1 } from './notification/notification.component';




const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'login',
      component: s1,
    },
    // {
    //   path: 'notification',
    //   component: t1,
    // }
   
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class settingsRoutingModule { }

export const routedComponents = [
  AuthComponent,
  s1,
  // t1
];

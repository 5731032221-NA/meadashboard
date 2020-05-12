import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
// import { Router } from '@angular/router';
// import { AuthenticationService } from './_services';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
  // currentUser: any;

  //   constructor(
  //       private router: Router,
  //       private authenticationService: AuthenticationService
  //   ) {
  //       this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  //   }

  //   logout() {
  //       this.authenticationService.logout();
  //       this.router.navigate(['/login']);
  //   }
}

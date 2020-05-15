/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbMenuModule_1;
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbMenuComponent, NbMenuItemComponent } from './menu.component';
import { NbMenuService, NbMenuInternalService } from './menu.service';
import { NbIconModule } from '../icon/icon.module';
const nbMenuComponents = [NbMenuComponent, NbMenuItemComponent];
const NB_MENU_PROVIDERS = [NbMenuService, NbMenuInternalService];
let NbMenuModule = NbMenuModule_1 = class NbMenuModule {
    static forRoot() {
        return {
            ngModule: NbMenuModule_1,
            providers: [
                ...NB_MENU_PROVIDERS,
            ],
        };
    }
};
NbMenuModule = NbMenuModule_1 = __decorate([
    NgModule({
        imports: [NbSharedModule, NbIconModule],
        declarations: [...nbMenuComponents],
        exports: [...nbMenuComponents],
    })
], NbMenuModule);
export { NbMenuModule };
//# sourceMappingURL=menu.module.js.map
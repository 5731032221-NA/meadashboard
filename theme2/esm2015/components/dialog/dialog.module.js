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
var NbDialogModule_1;
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbDialogService } from './dialog.service';
import { NbDialogContainerComponent } from './dialog-container';
import { NB_DIALOG_CONFIG } from './dialog-config';
let NbDialogModule = NbDialogModule_1 = class NbDialogModule {
    static forRoot(dialogConfig = {}) {
        return {
            ngModule: NbDialogModule_1,
            providers: [
                NbDialogService,
                { provide: NB_DIALOG_CONFIG, useValue: dialogConfig },
            ],
        };
    }
    static forChild(dialogConfig = {}) {
        return {
            ngModule: NbDialogModule_1,
            providers: [
                NbDialogService,
                { provide: NB_DIALOG_CONFIG, useValue: dialogConfig },
            ],
        };
    }
};
NbDialogModule = NbDialogModule_1 = __decorate([
    NgModule({
        imports: [NbSharedModule, NbOverlayModule],
        declarations: [NbDialogContainerComponent],
        entryComponents: [NbDialogContainerComponent],
    })
], NbDialogModule);
export { NbDialogModule };
//# sourceMappingURL=dialog.module.js.map
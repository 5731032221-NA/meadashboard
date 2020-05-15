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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input } from '@angular/core';
/**
 * Styled spinner component
 *
 * @styles
 *
 * spinner-background-color:
 * spinner-circle-filled-color:
 * spinner-circle-empty-color:
 * spinner-text-color:
 * spinner-text-font-family:
 * spinner-text-font-size:
 * spinner-text-font-weight:
 * spinner-text-line-height:
 * spinner-primary-circle-filled-color:
 * spinner-primary-circle-empty-color:
 * spinner-info-circle-filled-color:
 * spinner-info-circle-empty-color:
 * spinner-success-circle-filled-color:
 * spinner-success-circle-empty-color:
 * spinner-warning-circle-filled-color:
 * spinner-warning-circle-empty-color:
 * spinner-danger-circle-filled-color:
 * spinner-danger-circle-empty-color:
 * spinner-height-tiny:
 * spinner-height-small:
 * spinner-height-medium:
 * spinner-height-large:
 * spinner-height-giant:
 */
let NbSpinnerComponent = class NbSpinnerComponent {
    /**
     * Styled spinner component
     *
     * @styles
     *
     * spinner-background-color:
     * spinner-circle-filled-color:
     * spinner-circle-empty-color:
     * spinner-text-color:
     * spinner-text-font-family:
     * spinner-text-font-size:
     * spinner-text-font-weight:
     * spinner-text-line-height:
     * spinner-primary-circle-filled-color:
     * spinner-primary-circle-empty-color:
     * spinner-info-circle-filled-color:
     * spinner-info-circle-empty-color:
     * spinner-success-circle-filled-color:
     * spinner-success-circle-empty-color:
     * spinner-warning-circle-filled-color:
     * spinner-warning-circle-empty-color:
     * spinner-danger-circle-filled-color:
     * spinner-danger-circle-empty-color:
     * spinner-height-tiny:
     * spinner-height-small:
     * spinner-height-medium:
     * spinner-height-large:
     * spinner-height-giant:
     */
    constructor() {
        /**
         * Loading text that is shown near the icon
         * @type string
         */
        this.message = 'Loading...';
        /**
         * Spinner size, available sizes:
         * tiny, small, medium, large, giant
         * @param {string} value
         */
        this.size = 'medium';
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], NbSpinnerComponent.prototype, "message", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbSpinnerComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbSpinnerComponent.prototype, "status", void 0);
__decorate([
    HostBinding('class.size-tiny'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSpinnerComponent.prototype, "tiny", null);
__decorate([
    HostBinding('class.size-small'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSpinnerComponent.prototype, "small", null);
__decorate([
    HostBinding('class.size-medium'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSpinnerComponent.prototype, "medium", null);
__decorate([
    HostBinding('class.size-large'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSpinnerComponent.prototype, "large", null);
__decorate([
    HostBinding('class.size-giant'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSpinnerComponent.prototype, "giant", null);
__decorate([
    HostBinding('class.status-primary'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSpinnerComponent.prototype, "primary", null);
__decorate([
    HostBinding('class.status-info'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSpinnerComponent.prototype, "info", null);
__decorate([
    HostBinding('class.status-success'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSpinnerComponent.prototype, "success", null);
__decorate([
    HostBinding('class.status-warning'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSpinnerComponent.prototype, "warning", null);
__decorate([
    HostBinding('class.status-danger'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSpinnerComponent.prototype, "danger", null);
NbSpinnerComponent = __decorate([
    Component({
        selector: 'nb-spinner',
        template: `
    <span class="spin-circle"></span>
    <span class="message" *ngIf="message">{{ message }}</span>
  `,
        styles: [":host{opacity:1;position:absolute;border-radius:inherit;top:0;right:0;left:0;bottom:0;overflow:hidden;z-index:9999;display:flex;justify-content:center;align-items:center;visibility:visible}:host .spin-circle{animation:spin 0.8s infinite linear;border-radius:50%;border-style:solid;border-width:0.125em;width:1em;height:1em}:host .message{margin-left:0.5rem}\n"]
    })
], NbSpinnerComponent);
export { NbSpinnerComponent };
//# sourceMappingURL=spinner.component.js.map
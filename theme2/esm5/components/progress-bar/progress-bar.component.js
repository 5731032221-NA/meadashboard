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
 * Progress Bar is a component for indicating progress.
 *
 * Simple usage:
 *
 * ```html
 * <nb-progress-bar [value]="50"></nb-progress-bar>
 * ```
 * ### Installation
 *
 * Import `NbProgressBarModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbProgressBarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Progress bar accepts property `value` in range 0-100
 * @stacked-example(Progress bar, progress-bar/progress-bar-showcase.component)
 *
 * Progress bar background could be configured by providing a `status` property:
 * @stacked-example(Progress bar status, progress-bar/progress-bar-status.component)
 *
 * Progress bar size (height and font-size) could be configured by providing a `size` property:
 * @stacked-example(Progress bar size, progress-bar/progress-bar-size.component)
 *
 * `displayValue` property shows current value inside progress bar. It's also possible to add custom text inside:
 * @stacked-example(Progress bar value, progress-bar/progress-bar-value.component)
 *
 * Progress bar supports `width` and `background-color` transition:
 * @stacked-example(Progress bar interactive, progress-bar/progress-bar-interactive.component)
 *
 * @styles
 *
 * progress-bar-animation-duration:
 * progress-bar-border-radius:
 * progress-bar-text-font-family:
 * progress-bar-tiny-height:
 * progress-bar-tiny-text-font-size:
 * progress-bar-tiny-text-font-weight:
 * progress-bar-tiny-text-line-height:
 * progress-bar-small-height:
 * progress-bar-small-text-font-size:
 * progress-bar-small-text-font-weight:
 * progress-bar-small-text-line-height:
 * progress-bar-medium-height:
 * progress-bar-medium-text-font-size:
 * progress-bar-medium-text-font-weight:
 * progress-bar-medium-text-line-height:
 * progress-bar-large-height:
 * progress-bar-large-text-font-size:
 * progress-bar-large-text-font-weight:
 * progress-bar-large-text-line-height:
 * progress-bar-giant-height:
 * progress-bar-giant-text-font-size:
 * progress-bar-giant-text-font-weight:
 * progress-bar-giant-text-line-height:
 * progress-bar-primary-background-color:
 * progress-bar-primary-filled-background-color:
 * progress-bar-primary-text-color:
 * progress-bar-success-background-color:
 * progress-bar-success-filled-background-color:
 * progress-bar-success-text-color:
 * progress-bar-info-background-color:
 * progress-bar-info-filled-background-color:
 * progress-bar-info-text-color:
 * progress-bar-warning-background-color:
 * progress-bar-warning-filled-background-color:
 * progress-bar-warning-text-color:
 * progress-bar-danger-background-color:
 * progress-bar-danger-filled-background-color:
 * progress-bar-danger-text-color:
 */
var NbProgressBarComponent = /** @class */ (function () {
    function NbProgressBarComponent() {
        /**
         * Progress bar value in percent (0 - 100)
         */
        this.value = 0;
        /**
         * Progress bar background (`primary` (default), `info`, `success`, `warning`, `danger`)
         */
        this.status = 'primary';
        /**
         * Progress bar size (`tiny`, `small`, `medium` (default), `large`, `giant`)
         */
        this.size = 'medium';
        /**
         * Displays value inside progress bar
         */
        this.displayValue = false;
    }
    Object.defineProperty(NbProgressBarComponent.prototype, "tiny", {
        get: function () {
            return this.size === 'tiny';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbProgressBarComponent.prototype, "small", {
        get: function () {
            return this.size === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbProgressBarComponent.prototype, "medium", {
        get: function () {
            return this.size === 'medium';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbProgressBarComponent.prototype, "large", {
        get: function () {
            return this.size === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbProgressBarComponent.prototype, "giant", {
        get: function () {
            return this.size === 'giant';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbProgressBarComponent.prototype, "primary", {
        get: function () {
            return this.status === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbProgressBarComponent.prototype, "success", {
        get: function () {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbProgressBarComponent.prototype, "info", {
        get: function () {
            return this.status === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbProgressBarComponent.prototype, "warning", {
        get: function () {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbProgressBarComponent.prototype, "danger", {
        get: function () {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NbProgressBarComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbProgressBarComponent.prototype, "status", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbProgressBarComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbProgressBarComponent.prototype, "displayValue", void 0);
    __decorate([
        HostBinding('class.size-tiny'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbProgressBarComponent.prototype, "tiny", null);
    __decorate([
        HostBinding('class.size-small'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbProgressBarComponent.prototype, "small", null);
    __decorate([
        HostBinding('class.size-medium'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbProgressBarComponent.prototype, "medium", null);
    __decorate([
        HostBinding('class.size-large'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbProgressBarComponent.prototype, "large", null);
    __decorate([
        HostBinding('class.size-giant'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbProgressBarComponent.prototype, "giant", null);
    __decorate([
        HostBinding('class.status-primary'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbProgressBarComponent.prototype, "primary", null);
    __decorate([
        HostBinding('class.status-success'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbProgressBarComponent.prototype, "success", null);
    __decorate([
        HostBinding('class.status-info'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbProgressBarComponent.prototype, "info", null);
    __decorate([
        HostBinding('class.status-warning'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbProgressBarComponent.prototype, "warning", null);
    __decorate([
        HostBinding('class.status-danger'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbProgressBarComponent.prototype, "danger", null);
    NbProgressBarComponent = __decorate([
        Component({
            selector: 'nb-progress-bar',
            template: "\n    <div class=\"progress-container\">\n      <div class=\"progress-value\" [style.width.%]=\"value\">\n        <span *ngIf=\"displayValue\">{{ value }}%</span>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
            styles: [":host{display:block}.progress-container{overflow:hidden}.progress-value{height:100%;text-align:center;overflow:hidden}\n"]
        })
    ], NbProgressBarComponent);
    return NbProgressBarComponent;
}());
export { NbProgressBarComponent };
//# sourceMappingURL=progress-bar.component.js.map
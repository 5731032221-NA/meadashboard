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
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 * ### Installation
 *
 * Import `NbBadgeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbBadgeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Badge with default position and status(color):
 *
 * ```html
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * For example, badge can be placed into nb-card header:
 * @stacked-example(Showcase, badge/badge-showcase.component)
 *
 * Badge located on the bottom right with warning status:
 *
 * ```html
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-border-radius:
 * badge-text-font-family:
 * badge-text-font-size:
 * badge-text-font-weight:
 * badge-text-line-height:
 * badge-padding:
 * badge-primary-background-color:
 * badge-primary-text-color:
 * badge-success-background-color:
 * badge-success-text-color:
 * badge-info-background-color:
 * badge-info-text-color:
 * badge-warning-background-color:
 * badge-warning-text-color:
 * badge-danger-background-color:
 * badge-danger-text-color:
 */
var NbBadgeComponent = /** @class */ (function () {
    function NbBadgeComponent() {
        /**
         * Text to display
         * @type string
         */
        this.text = '';
        this._defaultPosition = 'top right';
        this._position = this._defaultPosition;
        /**
         * Badge status (adds specific styles):
         * 'primary', 'info', 'success', 'warning', 'danger'
         */
        this.status = 'primary';
    }
    Object.defineProperty(NbBadgeComponent.prototype, "position", {
        /**
         * Badge position
         *
         * Can be set to any class or to one of predefined positions:
         * 'top left', 'top right', 'bottom left', 'bottom right',
         * 'top start', 'top end', 'bottom start', 'bottom end'
         * @type string
         */
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value || this._defaultPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "primary", {
        get: function () {
            return this.status === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "success", {
        get: function () {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "info", {
        get: function () {
            return this.status === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "warning", {
        get: function () {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "danger", {
        get: function () {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "top", {
        get: function () {
            return this.position.includes('top');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "right", {
        get: function () {
            return this.position.includes('right');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "bottom", {
        get: function () {
            return this.position.includes('bottom');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "left", {
        get: function () {
            return this.position.includes('left');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "start", {
        get: function () {
            return this.position.includes('start');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "end", {
        get: function () {
            return this.position.includes('end');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbBadgeComponent.prototype, "text", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbBadgeComponent.prototype, "position", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbBadgeComponent.prototype, "status", void 0);
    __decorate([
        HostBinding('class.status-primary'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "primary", null);
    __decorate([
        HostBinding('class.status-success'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "success", null);
    __decorate([
        HostBinding('class.status-info'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "info", null);
    __decorate([
        HostBinding('class.status-warning'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "warning", null);
    __decorate([
        HostBinding('class.status-danger'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "danger", null);
    __decorate([
        HostBinding('class.position-top'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "top", null);
    __decorate([
        HostBinding('class.position-right'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "right", null);
    __decorate([
        HostBinding('class.position-bottom'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "bottom", null);
    __decorate([
        HostBinding('class.position-left'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "left", null);
    __decorate([
        HostBinding('class.position-start'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "start", null);
    __decorate([
        HostBinding('class.position-end'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbBadgeComponent.prototype, "end", null);
    NbBadgeComponent = __decorate([
        Component({
            selector: 'nb-badge',
            template: "{{text}}",
            styles: [":host{position:absolute;text-align:center;white-space:nowrap;vertical-align:baseline}:host(.position-top){top:0}:host(.position-right){right:0}:host(.position-bottom){bottom:0}:host(.position-left){left:0}[dir=ltr] :host(.position-start){left:0}[dir=rtl] :host(.position-start){right:0}[dir=ltr] :host(.position-end){right:0}[dir=rtl] :host(.position-end){left:0}\n"]
        })
    ], NbBadgeComponent);
    return NbBadgeComponent;
}());
export { NbBadgeComponent };
//# sourceMappingURL=badge.component.js.map
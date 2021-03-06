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
import { Component, Input, HostBinding, forwardRef, ChangeDetectorRef, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbLayoutDirectionService, NbLayoutDirection } from '../../services/direction.service';
import { convertToBoolProperty } from '../helpers';
/**
 * Toggle is a control representing `on` and `off` states.
 *
 * @stacked-example(Showcase, toggle/toggle-showcase.component)
 *
 * ### Installation
 *
 * Import `NbToggleComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToggleModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Toggle may have one of the following statuses: `primary`, `success`, `warning`, `danger`, `info`
 *
 * @stacked-example(Colored Toggles, toggle/toggle-status.component)
 *
 * Toggle can be disabled via `disabled` input.
 *
 * @stacked-example(Disabled Toggles, toggle/toggle-disabled.component)
 *
 * Toggle may have a label with following positions: `left`, `right`, `start`, `end` (default)
 *
 * @stacked-example(Toggles With Labels, toggle/toggle-label-position.component.ts)
 *
 * You can set control state via `checked` binding:
 *
 * ```html
 * <nb-toggle [(checked)]="checked"></nb-toggle>
 * ```
 *
 * Or it could be set via reactive forms or ngModel bindings:
 *
 * @stacked-example(Toggle form binding, toggle/toggle-form.component)
 *
 * @styles
 *
 * toggle-height:
 * toggle-width:
 * toggle-border-width:
 * toggle-border-radius:
 * toggle-border-color:
 * toggle-background-color:
 * toggle-outline-width:
 * toggle-outline-color:
 * toggle-switcher-size:
 * toggle-switcher-background-color:
 * toggle-switcher-checkmark-color:
 * toggle-text-color:
 * toggle-text-font-family:
 * toggle-text-font-size:
 * toggle-text-font-weight:
 * toggle-text-line-height:
 * toggle-cursor:
 * toggle-disabled-background-color:
 * toggle-disabled-border-color:
 * toggle-disabled-switcher-checkmark-color:
 * toggle-disabled-text-color:
 * toggle-disabled-cursor:
 * toggle-primary-background-color:
 * toggle-primary-border-color:
 * toggle-primary-checked-background-color:
 * toggle-primary-checked-border-color:
 * toggle-primary-checked-switcher-checkmark-color:
 * toggle-primary-focus-border-color:
 * toggle-primary-hover-background-color:
 * toggle-primary-hover-border-color:
 * toggle-primary-active-background-color:
 * toggle-primary-active-border-color:
 * toggle-success-background-color:
 * toggle-success-border-color:
 * toggle-success-checked-background-color:
 * toggle-success-checked-border-color:
 * toggle-success-checked-switcher-checkmark-color:
 * toggle-success-focus-border-color:
 * toggle-success-hover-background-color:
 * toggle-success-hover-border-color:
 * toggle-success-active-background-color:
 * toggle-success-active-border-color:
 * toggle-info-background-color:
 * toggle-info-border-color:
 * toggle-info-checked-background-color:
 * toggle-info-checked-border-color:
 * toggle-info-checked-switcher-checkmark-color:
 * toggle-info-focus-border-color:
 * toggle-info-hover-background-color:
 * toggle-info-hover-border-color:
 * toggle-info-active-background-color:
 * toggle-info-active-border-color:
 * toggle-warning-background-color:
 * toggle-warning-border-color:
 * toggle-warning-checked-background-color:
 * toggle-warning-checked-border-color:
 * toggle-warning-checked-switcher-checkmark-color:
 * toggle-warning-focus-border-color:
 * toggle-warning-hover-background-color:
 * toggle-warning-hover-border-color:
 * toggle-warning-active-background-color:
 * toggle-warning-active-border-color:
 * toggle-danger-background-color:
 * toggle-danger-border-color:
 * toggle-danger-checked-background-color:
 * toggle-danger-checked-border-color:
 * toggle-danger-checked-switcher-checkmark-color:
 * toggle-danger-focus-border-color:
 * toggle-danger-hover-background-color:
 * toggle-danger-hover-border-color:
 * toggle-danger-active-background-color:
 * toggle-danger-active-border-color:
 */
var NbToggleComponent = /** @class */ (function () {
    function NbToggleComponent(changeDetector, layoutDirection) {
        this.changeDetector = changeDetector;
        this.layoutDirection = layoutDirection;
        this.onChange = function () { };
        this.onTouched = function () { };
        this.destroy$ = new Subject();
        this._checked = false;
        this._disabled = false;
        /**
         * Toggle status.
         * Possible values are: `primary`, `success`, `warning`, `danger`, `info`
         */
        this.status = '';
        /**
         * Toggle label position.
         * Possible values are: `left`, `right`, `start`, `end` (default)
         */
        this.labelPosition = 'end';
        /**
         * Output when checked state is changed by a user
         * @type EventEmitter<boolean>
         */
        this.checkedChange = new EventEmitter();
    }
    NbToggleComponent_1 = NbToggleComponent;
    Object.defineProperty(NbToggleComponent.prototype, "checked", {
        /**
         * Toggle checked
         * @type {boolean}
         */
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToggleComponent.prototype, "disabled", {
        /**
         * Controls input disabled state
         */
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToggleComponent.prototype, "primary", {
        get: function () {
            return this.status === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToggleComponent.prototype, "success", {
        get: function () {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToggleComponent.prototype, "warning", {
        get: function () {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToggleComponent.prototype, "danger", {
        get: function () {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToggleComponent.prototype, "info", {
        get: function () {
            return this.status === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToggleComponent.prototype, "labelLeft", {
        get: function () {
            return this.labelPosition === 'left';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToggleComponent.prototype, "labelRight", {
        get: function () {
            return this.labelPosition === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToggleComponent.prototype, "labelStart", {
        get: function () {
            return this.labelPosition === 'start';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToggleComponent.prototype, "labelEnd", {
        get: function () {
            return this.labelPosition === 'end';
        },
        enumerable: true,
        configurable: true
    });
    NbToggleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutDirection.onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () { return _this.changeDetector.detectChanges(); });
    };
    NbToggleComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NbToggleComponent.prototype.checkState = function () {
        if (this.checked) {
            if (this.layoutDirection.getDirection() === NbLayoutDirection.LTR) {
                return 'ltrOn';
            }
            else {
                return 'rtlOn';
            }
        }
    };
    NbToggleComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbToggleComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbToggleComponent.prototype.writeValue = function (val) {
        this.checked = val;
        this.changeDetector.markForCheck();
    };
    NbToggleComponent.prototype.setDisabledState = function (val) {
        this.disabled = convertToBoolProperty(val);
        this.changeDetector.markForCheck();
    };
    NbToggleComponent.prototype.updateValue = function (event) {
        var input = event.target;
        this.checked = input.checked;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
    };
    NbToggleComponent.prototype.onInputClick = function (event) {
        event.stopPropagation();
    };
    var NbToggleComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbToggleComponent.prototype, "checked", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbToggleComponent.prototype, "disabled", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbToggleComponent.prototype, "status", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbToggleComponent.prototype, "labelPosition", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbToggleComponent.prototype, "checkedChange", void 0);
    __decorate([
        HostBinding('class.status-primary'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbToggleComponent.prototype, "primary", null);
    __decorate([
        HostBinding('class.status-success'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbToggleComponent.prototype, "success", null);
    __decorate([
        HostBinding('class.status-warning'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbToggleComponent.prototype, "warning", null);
    __decorate([
        HostBinding('class.status-danger'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbToggleComponent.prototype, "danger", null);
    __decorate([
        HostBinding('class.status-info'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbToggleComponent.prototype, "info", null);
    __decorate([
        HostBinding('class.toggle-label-left'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbToggleComponent.prototype, "labelLeft", null);
    __decorate([
        HostBinding('class.toggle-label-right'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbToggleComponent.prototype, "labelRight", null);
    __decorate([
        HostBinding('class.toggle-label-start'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbToggleComponent.prototype, "labelStart", null);
    __decorate([
        HostBinding('class.toggle-label-end'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbToggleComponent.prototype, "labelEnd", null);
    NbToggleComponent = NbToggleComponent_1 = __decorate([
        Component({
            selector: 'nb-toggle',
            animations: [
                trigger('onOff', [
                    state('ltrOn', style({ right: 0 })),
                    state('rtlOn', style({ left: 0 })),
                    transition(':enter', [animate(0)]),
                    transition('* <=> *', [animate('0.15s')]),
                ]),
            ],
            template: "\n    <label class=\"toggle-label\">\n      <input type=\"checkbox\"\n             class=\"native-input visually-hidden\"\n             role=\"switcher\"\n             [attr.aria-checked]=\"checked\"\n             [disabled]=\"disabled\"\n             [checked]=\"checked\"\n             (change)=\"updateValue($event)\"\n             (blur)=\"onTouched()\"\n             (click)=\"onInputClick($event)\">\n      <div class=\"toggle\" [class.checked]=\"checked\">\n        <span [@onOff]=\"checkState()\" class=\"toggle-switcher\">\n          <nb-icon *ngIf=\"checked\" icon=\"checkmark-bold-outline\" pack=\"nebular-essentials\"></nb-icon>\n        </span>\n      </div>\n      <span class=\"text\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return NbToggleComponent_1; }),
                    multi: true,
                }],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host{display:inline-flex;outline:none}:host(.toggle-label-left) .text{padding-right:0.6875rem}[dir=ltr] :host(.toggle-label-left) .text{order:-1}[dir=rtl] :host(.toggle-label-left) .text{order:1}:host(.toggle-label-right) .text{padding-left:0.6875rem}[dir=ltr] :host(.toggle-label-right) .text{order:1}[dir=rtl] :host(.toggle-label-right) .text{order:-1}:host(.toggle-label-start) .toggle-label{flex-direction:row-reverse}[dir=ltr] :host(.toggle-label-start) .toggle-label .text{padding-right:.6875rem}[dir=rtl] :host(.toggle-label-start) .toggle-label .text{padding-left:.6875rem}[dir=ltr] :host(.toggle-label-end) .text{padding-left:.6875rem}[dir=rtl] :host(.toggle-label-end) .text{padding-right:.6875rem}.toggle-label{position:relative;display:inline-flex;align-items:center}.toggle{position:relative;display:inline-flex;box-sizing:content-box;transition-duration:0.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}.toggle-switcher{position:absolute;border-radius:50%;margin:1px}.toggle-switcher nb-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:40%}\n"]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef,
            NbLayoutDirectionService])
    ], NbToggleComponent);
    return NbToggleComponent;
}());
export { NbToggleComponent };
//# sourceMappingURL=toggle.component.js.map
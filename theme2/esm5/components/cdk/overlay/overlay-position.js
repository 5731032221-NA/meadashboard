var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { NB_DOCUMENT } from '../../../theme.options';
import { NbFlexibleConnectedPositionStrategy, NbOverlayPositionBuilder, NbPlatform, } from './mapping';
import { NbOverlayContainerAdapter } from '../adapter/overlay-container-adapter';
import { NbViewportRulerAdapter } from '../adapter/viewport-ruler-adapter';
import { NbGlobalLogicalPosition } from './position-helper';
import { GlobalPositionStrategy } from '@angular/cdk/overlay';
export var NbAdjustment;
(function (NbAdjustment) {
    NbAdjustment["NOOP"] = "noop";
    NbAdjustment["CLOCKWISE"] = "clockwise";
    NbAdjustment["COUNTERCLOCKWISE"] = "counterclockwise";
    NbAdjustment["VERTICAL"] = "vertical";
    NbAdjustment["HORIZONTAL"] = "horizontal";
})(NbAdjustment || (NbAdjustment = {}));
export var NbPosition;
(function (NbPosition) {
    NbPosition["TOP"] = "top";
    NbPosition["BOTTOM"] = "bottom";
    NbPosition["LEFT"] = "left";
    NbPosition["RIGHT"] = "right";
    NbPosition["START"] = "start";
    NbPosition["END"] = "end";
    NbPosition["TOP_END"] = "top-end";
    NbPosition["TOP_START"] = "top-start";
    NbPosition["BOTTOM_END"] = "bottom-end";
    NbPosition["BOTTOM_START"] = "bottom-start";
    NbPosition["END_TOP"] = "end-top";
    NbPosition["END_BOTTOM"] = "end-bottom";
    NbPosition["START_TOP"] = "start-top";
    NbPosition["START_BOTTOM"] = "start-bottom";
})(NbPosition || (NbPosition = {}));
var POSITIONS = (_a = {},
    _a[NbPosition.RIGHT] = function (offset) {
        return { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: offset };
    },
    _a[NbPosition.BOTTOM] = function (offset) {
        return { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: offset };
    },
    _a[NbPosition.LEFT] = function (offset) {
        return { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -offset };
    },
    _a[NbPosition.TOP] = function (offset) {
        return { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -offset };
    },
    _a[NbPosition.START] = function (offset) {
        return this[NbPosition.LEFT](offset);
    },
    _a[NbPosition.END] = function (offset) {
        return this[NbPosition.RIGHT](offset);
    },
    _a[NbPosition.END_TOP] = function (offset) {
        return { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'bottom', offsetX: offset };
    },
    _a[NbPosition.END_BOTTOM] = function (offset) {
        return { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', offsetX: offset };
    },
    _a[NbPosition.BOTTOM_START] = function (offset) {
        return { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: offset };
    },
    _a[NbPosition.BOTTOM_END] = function (offset) {
        return { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: offset };
    },
    _a[NbPosition.START_TOP] = function (offset) {
        return { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'bottom', offsetX: -offset };
    },
    _a[NbPosition.START_BOTTOM] = function (offset) {
        return { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'top', offsetX: -offset };
    },
    _a[NbPosition.TOP_START] = function (offset) {
        return { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetY: -offset };
    },
    _a[NbPosition.TOP_END] = function (offset) {
        return { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -offset };
    },
    _a);
var COUNTER_CLOCKWISE_POSITIONS = [
    NbPosition.TOP,
    NbPosition.TOP_END,
    NbPosition.TOP_START,
    NbPosition.START,
    NbPosition.START_TOP,
    NbPosition.START_BOTTOM,
    NbPosition.BOTTOM,
    NbPosition.BOTTOM_START,
    NbPosition.BOTTOM_END,
    NbPosition.END,
    NbPosition.END_BOTTOM,
    NbPosition.END_TOP,
];
var CLOCKWISE_POSITIONS = [
    NbPosition.TOP,
    NbPosition.TOP_START,
    NbPosition.TOP_END,
    NbPosition.END,
    NbPosition.END_TOP,
    NbPosition.END_BOTTOM,
    NbPosition.BOTTOM,
    NbPosition.BOTTOM_END,
    NbPosition.BOTTOM_START,
    NbPosition.START,
    NbPosition.START_BOTTOM,
    NbPosition.START_TOP,
];
var VERTICAL_POSITIONS = [NbPosition.BOTTOM, NbPosition.TOP];
var HORIZONTAL_POSITIONS = [NbPosition.START, NbPosition.END];
function comparePositions(p1, p2) {
    return p1.originX === p2.originX
        && p1.originY === p2.originY
        && p1.overlayX === p2.overlayX
        && p1.overlayY === p2.overlayY;
}
/**
 * The main idea of the adjustable connected strategy is to provide predefined set of positions for your overlay.
 * You have to provide adjustment and appropriate strategy will be chosen in runtime.
 * */
var NbAdjustableConnectedPositionStrategy = /** @class */ (function (_super) {
    __extends(NbAdjustableConnectedPositionStrategy, _super);
    function NbAdjustableConnectedPositionStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._offset = 15;
        _this.positionChange = _this.positionChanges.pipe(map(function (positionChange) { return positionChange.connectionPair; }), map(function (connectionPair) {
            return _this.appliedPositions.find(function (_a) {
                var connectedPosition = _a.connectedPosition;
                return comparePositions(connectedPosition, connectionPair);
            }).key;
        }));
        return _this;
    }
    NbAdjustableConnectedPositionStrategy.prototype.attach = function (overlayRef) {
        /**
         * We have to apply positions before attach because super.attach() validates positions and crashes app
         * if no positions provided.
         * */
        this.applyPositions();
        _super.prototype.attach.call(this, overlayRef);
    };
    NbAdjustableConnectedPositionStrategy.prototype.apply = function () {
        this.applyPositions();
        _super.prototype.apply.call(this);
    };
    NbAdjustableConnectedPositionStrategy.prototype.position = function (position) {
        this._position = position;
        return this;
    };
    NbAdjustableConnectedPositionStrategy.prototype.adjustment = function (adjustment) {
        this._adjustment = adjustment;
        return this;
    };
    NbAdjustableConnectedPositionStrategy.prototype.offset = function (offset) {
        this._offset = offset;
        return this;
    };
    NbAdjustableConnectedPositionStrategy.prototype.applyPositions = function () {
        var positions = this.createPositions();
        this.persistChosenPositions(positions);
        this.withPositions(this.appliedPositions.map(function (_a) {
            var connectedPosition = _a.connectedPosition;
            return connectedPosition;
        }));
    };
    NbAdjustableConnectedPositionStrategy.prototype.createPositions = function () {
        switch (this._adjustment) {
            case NbAdjustment.NOOP:
                return [this._position];
            case NbAdjustment.CLOCKWISE:
                return this.reorderPreferredPositions(CLOCKWISE_POSITIONS);
            case NbAdjustment.COUNTERCLOCKWISE:
                return this.reorderPreferredPositions(COUNTER_CLOCKWISE_POSITIONS);
            case NbAdjustment.HORIZONTAL:
                return this.reorderPreferredPositions(HORIZONTAL_POSITIONS);
            case NbAdjustment.VERTICAL:
                return this.reorderPreferredPositions(VERTICAL_POSITIONS);
        }
    };
    NbAdjustableConnectedPositionStrategy.prototype.persistChosenPositions = function (positions) {
        var _this = this;
        this.appliedPositions = positions.map(function (position) { return ({
            key: position,
            connectedPosition: POSITIONS[position](_this._offset),
        }); });
    };
    NbAdjustableConnectedPositionStrategy.prototype.reorderPreferredPositions = function (positions) {
        var startPositionIndex = positions.indexOf(this._position);
        var firstPart = positions.slice(startPositionIndex);
        var secondPart = positions.slice(0, startPositionIndex);
        return firstPart.concat(secondPart);
    };
    return NbAdjustableConnectedPositionStrategy;
}(NbFlexibleConnectedPositionStrategy));
export { NbAdjustableConnectedPositionStrategy };
var NbGlobalPositionStrategy = /** @class */ (function (_super) {
    __extends(NbGlobalPositionStrategy, _super);
    function NbGlobalPositionStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbGlobalPositionStrategy.prototype.position = function (position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return this.top().left();
            case NbGlobalLogicalPosition.TOP_END:
                return this.top().right();
            case NbGlobalLogicalPosition.BOTTOM_START:
                return this.bottom().left();
            case NbGlobalLogicalPosition.BOTTOM_END:
                return this.bottom().right();
        }
    };
    return NbGlobalPositionStrategy;
}(GlobalPositionStrategy));
export { NbGlobalPositionStrategy };
var NbPositionBuilderService = /** @class */ (function () {
    function NbPositionBuilderService(document, viewportRuler, platform, positionBuilder, overlayContainer) {
        this.document = document;
        this.viewportRuler = viewportRuler;
        this.platform = platform;
        this.positionBuilder = positionBuilder;
        this.overlayContainer = overlayContainer;
    }
    NbPositionBuilderService.prototype.global = function () {
        return new NbGlobalPositionStrategy();
    };
    NbPositionBuilderService.prototype.connectedTo = function (elementRef) {
        return new NbAdjustableConnectedPositionStrategy(elementRef, this.viewportRuler, this.document, this.platform, this.overlayContainer)
            .withFlexibleDimensions(false)
            .withPush(false);
    };
    NbPositionBuilderService = __decorate([
        Injectable(),
        __param(0, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [Object, NbViewportRulerAdapter,
            NbPlatform,
            NbOverlayPositionBuilder,
            NbOverlayContainerAdapter])
    ], NbPositionBuilderService);
    return NbPositionBuilderService;
}());
export { NbPositionBuilderService };
//# sourceMappingURL=overlay-position.js.map
/*
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
import { Injectable } from '@angular/core';
/**
 * Service used to filter tree grid data. Searched searchString in all object values.
 * If you need custom filter, you can extend this service and override filterPredicate or whole filter method.
 */
var NbTreeGridFilterService = /** @class */ (function () {
    function NbTreeGridFilterService() {
    }
    NbTreeGridFilterService.prototype.filter = function (query, data) {
        var _this = this;
        if (!query) {
            return data;
        }
        return data.reduce(function (filtered, node) {
            var filteredChildren;
            if (node.children) {
                filteredChildren = _this.filter(query, node.children);
                node.children = filteredChildren;
            }
            node.expanded = false;
            if (filteredChildren && filteredChildren.length) {
                node.expanded = true;
                filtered.push(node);
            }
            else if (_this.filterPredicate(node.data, query)) {
                filtered.push(node);
            }
            return filtered;
        }, []);
    };
    NbTreeGridFilterService.prototype.filterPredicate = function (data, searchQuery) {
        var preparedQuery = searchQuery.trim().toLocaleLowerCase();
        for (var _i = 0, _a = Object.values(data); _i < _a.length; _i++) {
            var val = _a[_i];
            var preparedVal = ("" + val).trim().toLocaleLowerCase();
            if (preparedVal.includes(preparedQuery)) {
                return true;
            }
        }
        return false;
    };
    NbTreeGridFilterService = __decorate([
        Injectable()
    ], NbTreeGridFilterService);
    return NbTreeGridFilterService;
}());
export { NbTreeGridFilterService };
//# sourceMappingURL=tree-grid-filter.service.js.map
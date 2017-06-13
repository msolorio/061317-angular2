"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var fridgeItem_1 = require("./fridgeItem");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Fridge Items';
        this.fridgeItems = [
            new fridgeItem_1.FridgeItem(0, 'Apple', false),
            new fridgeItem_1.FridgeItem(1, 'Sandwich', true),
            new fridgeItem_1.FridgeItem(2, 'Eggs', false)
        ];
        this.scienceProject = this.fridgeItems[1];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <ul>\n      <li *ngFor=\"let item of fridgeItems\" id={{item.id}}>\n        {{item.name}}\n      </li>\n    </ul>\n    <p>Your science project is the {{scienceProject.name}}</p>\n    <p *ngIf=\"scienceProject.moldy\">Your science project is sufficiently moldy</p>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
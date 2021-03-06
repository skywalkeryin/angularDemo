"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        // name: string = 'World!!';
        this.pageheader = 'Success!!';
        this.imgPath = 'data:image/png;base64,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';
        this.FirstName = 'qianhao';
        this.LastName = 'yin';
        this.userText = 'yinqianhao';
    }
    AppComponent.prototype.getFullname = function () {
        return this.FirstName + ' ' + this.LastName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n <div>\n    <h1>{{ pageheader ? yin : 'no header' }}</h1>\n    <h2>{{  getFullname() }}</h2>\n    <img [src]='imgPath' />\n    <span [innerHtml] = 'pageheader'></span>\n </div>\n <my-employee></my-employee>\n<br/>\n<br/>\n <employeelist></employeelist>\n<br/>\n<br/>\n <input type='text' [(ngModel)]='userText'/>\n<br/>\n <br/>\n <simple [content] = 'userText' ></simple>\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
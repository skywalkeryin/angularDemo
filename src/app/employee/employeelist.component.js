"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 'emp01', name: 'yinqianhao', gender: 'Male', annulSalary: 10000, dataOfBirth: '26/06/1992' },
            { code: 'emp02', name: 'zhutianxin', gender: 'Male', annulSalary: 5700.95, dataOfBirth: '26/06/1992' },
            { code: 'emp03', name: 'Tom', gender: 'Male', annulSalary: 5900, dataOfBirth: '26/06/1995' },
            { code: 'emp04', name: 'Mike', gender: 'Male', annulSalary: 10000, dataOfBirth: '26/06/1942' },
            { code: 'emp05', name: 'Mary', gender: 'Female', annulSalary: 10000, dataOfBirth: '26/06/1982' }
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'emp01', name: 'yinqianhao', gender: 'Male', annulSalary: 10000, dataOfBirth: '26/06/1992' },
            { code: 'emp02', name: 'zhutianxin', gender: 'Male', annulSalary: 5700.95, dataOfBirth: '26/06/1992' },
            { code: 'emp03', name: 'Tom', gender: 'Male', annulSalary: 5900, dataOfBirth: '26/06/1995' },
            { code: 'emp04', name: 'Mike', gender: 'Male', annulSalary: 10000, dataOfBirth: '26/06/1942' },
            { code: 'emp05', name: 'Mary', gender: 'Female', annulSalary: 10000, dataOfBirth: '26/06/1982' },
            { code: 'emp06', name: 'Jack', gender: 'Male', annulSalary: 10000, dataOfBirth: '26/06/1982' }
        ];
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employeelist',
            templateUrl: './employeelist.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeelist.component.js.map
import { Component } from '@angular/core';

@Component({
    selector: 'employeelist',
    templateUrl: './employeelist.component.html',
    styleUrls: []
})


export class EmployeeListComponent {

    employees: any[];
    constructor() {
        this.employees = [
            { code: 'emp01', name: 'yinqianhao', gender: 'Male', annulSalary: 10000, dataOfBirth: '26/06/1992' },
            { code: 'emp02', name: 'zhutianxin', gender: 'Male', annulSalary: 5700.95, dataOfBirth: '26/06/1992' },
            { code: 'emp03', name: 'Tom', gender: 'Male', annulSalary: 5900, dataOfBirth: '26/06/1995' },
            { code: 'emp04', name: 'Mike', gender: 'Male', annulSalary: 10000, dataOfBirth: '26/06/1942' },
            { code: 'emp05', name: 'Mary', gender: 'Female', annulSalary: 10000, dataOfBirth: '26/06/1982' }

        ];
    }
    getEmployees(): void {
        this.employees = [
            { code: 'emp01', name: 'yinqianhao', gender: 'Male', annulSalary: 10000, dataOfBirth: '26/06/1992' },
            { code: 'emp02', name: 'zhutianxin', gender: 'Male', annulSalary: 5700.95, dataOfBirth: '26/06/1992' },
            { code: 'emp03', name: 'Tom', gender: 'Male', annulSalary: 5900, dataOfBirth: '26/06/1995' },
            { code: 'emp04', name: 'Mike', gender: 'Male', annulSalary: 10000, dataOfBirth: '26/06/1942' },
            { code: 'emp05', name: 'Mary', gender: 'Female', annulSalary: 10000, dataOfBirth: '26/06/1982' },
            { code: 'emp06', name: 'Jack', gender: 'Male', annulSalary: 10000, dataOfBirth: '26/06/1982' }

        ];

    }

}

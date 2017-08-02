import { Component } from '@angular/core';


@Component({
    selector: 'my-employee',
    templateUrl:'./employee.component.html'
})


export class EmployeeComponent{
    name: string = 'yinqianhao';
    age: number = 24;

    

}
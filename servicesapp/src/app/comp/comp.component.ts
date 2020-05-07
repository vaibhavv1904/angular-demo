import { Component, OnInit , Output } from '@angular/core';
// import { EventEmitter } from 'protractor';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-comp',
  template: `
  <h2>employee list</h2>
  <h3>{{errormsg}}</h3>
  <ul *ngFor = "let employee of employees">
    <li>{{employee.name + " " + employee.age}}</li>
  </ul>
  `,
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
   
  public employees = []; 
  public errormsg;
  constructor(private _employeeService: EmployeeService) { }

   ngOnInit() {
    this._employeeService.getemployees()
      .subscribe(data => this.employees = data,
                 error => this.errormsg = error);
  }  

}

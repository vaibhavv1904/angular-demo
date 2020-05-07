import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empdet',
  template: `
   <h2> employee detail</h2>
   <h3> {{errormsg}}</h3>   
   <ul *ngFor = "let employee of employees">
    <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
   </ul>
  `,
  styles: []
})
export class EmpdetComponent implements OnInit {

  public employees = []; 
  public errormsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getemployees()
      .subscribe(data => this.employees = data,
                 error => this.errormsg = error);
  } 


}

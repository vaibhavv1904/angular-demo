import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
   <input [(ngModel)] = "name" type = "text">
   {{name}}
  `,
  styles: [`
    .st1
    {
      color: green;
    }
    .st2
    {
      color: pink;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "";
  constructor() { }

  ngOnInit(): void {
  }
   
}

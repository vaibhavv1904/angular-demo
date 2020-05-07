import { Component, OnInit, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  // @Input('parentData') public name; 
  public date = new Date();
  constructor() { }
  public name = "VaibhaV";
  ngOnInit(): void {
  }

}

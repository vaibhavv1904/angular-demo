import { Component, OnInit, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: []
})
export class TestComponent implements OnInit {

  public date = new Date();
  constructor() { }
  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  raw:string ="";
  stuffed:string ="";
  destuffed:string ="";
  count:number = 0;
  count1:number = 0;
  i:number;
  j:number;
  stuffing() {
    this.count = 0;
    for(this.i = 0;this.i<this.raw.length;this.i++) {
      if(parseInt(this.raw[this.i]) == 1) {
        this.count++;
      }
      if(parseInt(this.raw[this.i]) == 0) {
        this.count = 0;
      }
      this.stuffed += this.raw[this.i];
      if(this.count == 5) {
        this.stuffed += "0";
        this.count = 0;
      }
    }
  }
  destuffing() {
    this.count1 = 0
    for(this.j = 0;this.j<this.stuffed.length;this.j++) {
      if(parseInt(this.stuffed[this.j]) == 1) {
        this.count1++;
      }
      if(parseInt(this.stuffed[this.j]) == 0) {
        this.count1 = 0;
      }
      if(this.count1 == 5) {
        this.destuffed += this.stuffed[this.j];
        this.count1 = 0;
        this.j++;
      } else {
        this.destuffed += this.stuffed[this.j];
      }
    }
  }
  clear() {
    this.count = this.count1 = this.i = this.j = 0;
    this.raw = this.stuffed = this.destuffed = "";
  }
}

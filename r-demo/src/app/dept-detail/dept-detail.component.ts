import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
    <h3> You selected department with id =  {{deptid}} </h3>

    <p>
     <button (click) = "showOverview()"> overview </button>
     <button (click) = "showContact()"> contact </button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click) = "goNext()">next</button>
    <button (click) = "goPrev()">prev</button>
    </p>
    <div>
     <button (click) = "goback()" >Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DeptDetailComponent implements OnInit {

  public deptid;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.deptid = id; 
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.deptid = id;
    });
  }
  
  goPrev()
  {
    let previd = this.deptid - 1;
    this.router.navigate(['departments',previd]);
    // this.router.navigate([previd],{relativeTo:this.route});
  }

  goNext()
  {
    let nextid = this.deptid + 1;
    this.router.navigate(['departments',nextid]);
  }

  goback()
  {
    let selectedId = this.deptid ? this.deptid : null;
    this.router.navigate(['/departments',{id:selectedId}]);
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }

  showOverview()
  {
    this.router.navigate(['overview'],{relativeTo:this.route});
  }

  showContact()
  {
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}

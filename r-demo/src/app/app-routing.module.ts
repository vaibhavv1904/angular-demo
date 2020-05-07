import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


const routes: Routes = [
  {path: '', redirectTo: 'departments', pathMatch: 'full'},
  {path: 'departments', component: DeptListComponent},
  {path: 'departments/:id', 
  component: DeptDetailComponent,
  children :[
    {path: 'overview',component:DepartmentOverviewComponent},
    {path: 'contact',component:DepartmentContactComponent}
  ]
  },
  {path: 'employees', component: EmpListComponent},
  {path: "**",component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DeptListComponent,
                                  EmpListComponent,
                                  PageNotFoundComponent,
                                  DeptDetailComponent,
                                  DepartmentOverviewComponent,
                                  DepartmentContactComponent]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist.component';

const routes: Routes = [{ path: '', component: DepartmentlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentlistRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddepartmentComponent } from './adddepartment.component';

const routes: Routes = [{ path: '', component: AdddepartmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdddepartmentRoutingModule { }

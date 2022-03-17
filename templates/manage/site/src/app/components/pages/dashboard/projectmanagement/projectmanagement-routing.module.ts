import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectmanagementComponent } from './projectmanagement.component';

const routes: Routes = [{ path: '', component: ProjectmanagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagementRoutingModule { }

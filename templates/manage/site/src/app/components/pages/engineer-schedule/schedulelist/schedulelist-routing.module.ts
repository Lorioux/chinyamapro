import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulelistComponent } from './schedulelist.component';

const routes: Routes = [{ path: '', component: SchedulelistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulelistRoutingModule { }

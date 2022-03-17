import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentlistComponent } from './appointmentlist.component';

const routes: Routes = [{ path: '', component: AppointmentlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentlistRoutingModule { }

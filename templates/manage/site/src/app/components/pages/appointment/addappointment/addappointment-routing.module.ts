import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddappointmentComponent } from './addappointment.component';

const routes: Routes = [{ path: '', component: AddappointmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddappointmentRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddscheduleComponent } from './addschedule.component';

const routes: Routes = [{ path: '', component: AddscheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddscheduleRoutingModule { }

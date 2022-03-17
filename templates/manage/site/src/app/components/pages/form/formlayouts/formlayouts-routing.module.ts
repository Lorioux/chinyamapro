import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormlayoutsComponent } from './formlayouts.component';

const routes: Routes = [{ path: '', component: FormlayoutsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormlayoutsRoutingModule { }

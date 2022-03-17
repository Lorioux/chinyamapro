import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpaymentComponent } from './addpayment.component';

const routes: Routes = [{ path: '', component: AddpaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpaymentRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentlistComponent } from './paymentlist.component';

const routes: Routes = [{ path: '', component: PaymentlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentlistRoutingModule { }

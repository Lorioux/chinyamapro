import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentinvoiceComponent } from './paymentinvoice.component';

const routes: Routes = [{ path: '', component: PaymentinvoiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentinvoiceRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentinvoiceRoutingModule } from './paymentinvoice-routing.module';
import { PaymentinvoiceComponent } from './paymentinvoice.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [PaymentinvoiceComponent, ContentComponent],
  imports: [
    CommonModule,
    PaymentinvoiceRoutingModule,
    SharedModule
  ]
})
export class PaymentinvoiceModule { }

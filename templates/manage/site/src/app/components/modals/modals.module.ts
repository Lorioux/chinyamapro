import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { GeneratereportComponent } from './generatereport/generatereport.component';
import { MakeappointmentComponent } from './makeappointment/makeappointment.component';
import { MakeprescriptionComponent } from './makeprescription/makeprescription.component';
import { ModallogintextComponent } from './modallogintext/modallogintext.component';
import { ModalregistertextComponent } from './modalregistertext/modalregistertext.component';

@NgModule({
  declarations: [GeneratereportComponent, MakeappointmentComponent, MakeprescriptionComponent, ModallogintextComponent, ModalregistertextComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ],
  exports:[GeneratereportComponent, MakeappointmentComponent, MakeprescriptionComponent, ModallogintextComponent, ModalregistertextComponent]
})
export class ModalsModule { }

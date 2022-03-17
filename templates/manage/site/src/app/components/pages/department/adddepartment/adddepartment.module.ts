import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { AdddepartmentRoutingModule } from './adddepartment-routing.module';
import { AdddepartmentComponent } from './adddepartment.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AdddepartmentComponent, ContentComponent],
  imports: [
    CommonModule,
    AdddepartmentRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ]
})
export class AdddepartmentModule { }

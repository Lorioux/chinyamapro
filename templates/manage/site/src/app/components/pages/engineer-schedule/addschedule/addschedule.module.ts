import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { AddscheduleRoutingModule } from './addschedule-routing.module';
import { AddscheduleComponent } from './addschedule.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AddscheduleComponent, ContentComponent],
  imports: [
    CommonModule,
    AddscheduleRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ]
})
export class AddscheduleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { AddtaskRoutingModule } from './addtask-routing.module';
import { AddtaskComponent } from './addtask.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AddtaskComponent, ContentComponent],
  imports: [
    CommonModule,
    AddtaskRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ]
})
export class AddtaskModule { }

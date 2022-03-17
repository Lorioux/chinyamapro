import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

import { FormwizardRoutingModule } from './formwizard-routing.module';
import { FormwizardComponent } from './formwizard.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [FormwizardComponent, ContentComponent],
  imports: [
    CommonModule,
    FormwizardRoutingModule,
    SharedModule,
    NgbModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ]
})
export class FormwizardModule { }

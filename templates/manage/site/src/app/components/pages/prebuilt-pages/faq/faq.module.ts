import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [FaqComponent, ContentComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class FaqModule { }

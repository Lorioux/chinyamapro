import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { TotalreportRoutingModule } from './totalreport-routing.module';
import { TotalreportComponent } from './totalreport.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [TotalreportComponent, ContentComponent],
  imports: [
    CommonModule,
    TotalreportRoutingModule,
    SharedModule,
    NgbModule,
    ChartsModule
  ]
})
export class TotalreportModule { }

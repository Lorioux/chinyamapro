import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { EngineerreportRoutingModule } from './engineerreport-routing.module';
import { EngineerreportComponent } from './engineerreport.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [EngineerreportComponent, ContentComponent],
  imports: [
    CommonModule,
    EngineerreportRoutingModule,
    SharedModule,
    NgbModule,
    ChartsModule
  ]
})
export class EngineerreportModule { }

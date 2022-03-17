import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientreportRoutingModule } from './clientreport-routing.module';
import { ClientreportComponent } from './clientreport.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ClientreportComponent, ContentComponent],
  imports: [
    CommonModule,
    ClientreportRoutingModule,
    SharedModule
  ]
})
export class ClientreportModule { }

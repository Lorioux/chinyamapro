import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppointmentlistRoutingModule } from './appointmentlist-routing.module';
import { AppointmentlistComponent } from './appointmentlist.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AppointmentlistComponent, ContentComponent],
  imports: [
    CommonModule,
    AppointmentlistRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    Ng2SmartTableModule
  ]
})
export class AppointmentlistModule { }

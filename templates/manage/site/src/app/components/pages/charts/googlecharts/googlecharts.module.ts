import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { GooglechartsRoutingModule } from './googlecharts-routing.module';
import { GooglechartsComponent } from './googlecharts.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [GooglechartsComponent, ContentComponent],
  imports: [
    CommonModule,
    GooglechartsRoutingModule,
    SharedModule,
    Ng2GoogleChartsModule
  ]
})
export class GooglechartsModule { }

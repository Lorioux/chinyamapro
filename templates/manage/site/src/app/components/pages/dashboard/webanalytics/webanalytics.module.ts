import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

import { WebanalyticsRoutingModule } from './webanalytics-routing.module';
import { WebanalyticsComponent } from './webanalytics.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [WebanalyticsComponent, ContentComponent],
  imports: [
    CommonModule,
    WebanalyticsRoutingModule,
    SharedModule,
    FormsModule,
    HighchartsChartModule,
    NgbModule,
    ChartsModule
  ]
})
export class WebanalyticsModule { }

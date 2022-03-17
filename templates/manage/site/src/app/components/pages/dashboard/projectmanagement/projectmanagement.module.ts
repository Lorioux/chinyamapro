import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { ProjectmanagementRoutingModule } from './projectmanagement-routing.module';
import { ProjectmanagementComponent } from './projectmanagement.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ProjectmanagementComponent, ContentComponent],
  imports: [
    CommonModule,
    ProjectmanagementRoutingModule,
    SharedModule,
    NgbModule,
    ChartsModule,
    FormsModule
  ]
})
export class ProjectmanagementModule { }

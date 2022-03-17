import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProgressbarsRoutingModule } from './progressbars-routing.module';
import { ProgressbarsComponent } from './progressbars.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ProgressbarsComponent, ContentComponent],
  imports: [
    CommonModule,
    ProgressbarsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ProgressbarsModule { }

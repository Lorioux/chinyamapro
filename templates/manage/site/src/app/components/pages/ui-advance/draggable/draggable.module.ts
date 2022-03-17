import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'ngx-sortablejs';

import { DraggableRoutingModule } from './draggable-routing.module';
import { DraggableComponent } from './draggable.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [DraggableComponent, ContentComponent],
  imports: [
    CommonModule,
    DraggableRoutingModule,
    SharedModule,
    NgbModule,
    SortablejsModule
  ]
})
export class DraggableModule { }

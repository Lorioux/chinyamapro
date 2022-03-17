import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { NoticelistRoutingModule } from './noticelist-routing.module';
import { NoticelistComponent } from './noticelist.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [NoticelistComponent, ContentComponent],
  imports: [
    CommonModule,
    NoticelistRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    Ng2SmartTableModule
  ]
})
export class NoticelistModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { RepresentativelistRoutingModule } from './representativelist-routing.module';
import { RepresentativelistComponent } from './representativelist.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [RepresentativelistComponent, ContentComponent],
  imports: [
    CommonModule,
    RepresentativelistRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    Ng2SmartTableModule
  ]
})
export class RepresentativelistModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
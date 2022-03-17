import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasictablesRoutingModule } from './basictables-routing.module';
import { BasictablesComponent } from './basictables.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [BasictablesComponent, ContentComponent],
  imports: [
    CommonModule,
    BasictablesRoutingModule,
    SharedModule
  ]
})
export class BasictablesModule { }

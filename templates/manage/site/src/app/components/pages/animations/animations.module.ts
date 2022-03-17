import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowModule } from 'ngx-wow';

import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsComponent } from './animations.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AnimationsComponent, ContentComponent],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
    SharedModule,
    NgwWowModule
  ]
})
export class AnimationsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloaderRoutingModule } from './preloader-routing.module';
import { PreloaderComponent } from './preloader.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [PreloaderComponent, ContentComponent],
  imports: [
    CommonModule,
    PreloaderRoutingModule,
    SharedModule
  ]
})
export class PreloaderModule { }

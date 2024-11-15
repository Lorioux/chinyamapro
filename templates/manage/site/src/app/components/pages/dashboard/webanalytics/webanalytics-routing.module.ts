import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebanalyticsComponent } from './webanalytics.component';

const routes: Routes = [{ path: '', component: WebanalyticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebanalyticsRoutingModule { }

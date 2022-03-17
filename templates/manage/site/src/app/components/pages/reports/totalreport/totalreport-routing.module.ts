import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalreportComponent } from './totalreport.component';

const routes: Routes = [{ path: '', component: TotalreportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotalreportRoutingModule { }

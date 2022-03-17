import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerreportComponent } from './engineerreport.component';

const routes: Routes = [{ path: '', component: EngineerreportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineerreportRoutingModule { }

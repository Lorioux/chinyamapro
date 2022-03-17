import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientreportComponent } from './clientreport.component';

const routes: Routes = [{ path: '', component: ClientreportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientreportRoutingModule { }

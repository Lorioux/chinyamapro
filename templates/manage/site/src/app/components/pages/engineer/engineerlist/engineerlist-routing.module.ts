import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerlistComponent } from './engineerlist.component';

const routes: Routes = [{ path: '', component: EngineerlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineerlistRoutingModule { }

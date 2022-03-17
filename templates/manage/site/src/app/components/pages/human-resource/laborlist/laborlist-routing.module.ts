import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaborlistComponent } from './laborlist.component';

const routes: Routes = [{ path: '', component: LaborlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaborlistRoutingModule { }

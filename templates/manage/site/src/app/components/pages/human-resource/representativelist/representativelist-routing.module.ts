import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepresentativelistComponent } from './representativelist.component';

const routes: Routes = [{ path: '', component: RepresentativelistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentativelistRoutingModule { }

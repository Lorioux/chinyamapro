import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormelementsComponent } from './formelements.component';

const routes: Routes = [{ path: '', component: FormelementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormelementsRoutingModule { }

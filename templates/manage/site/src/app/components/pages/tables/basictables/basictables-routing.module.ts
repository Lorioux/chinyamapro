import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasictablesComponent } from './basictables.component';

const routes: Routes = [{ path: '', component: BasictablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasictablesRoutingModule { }

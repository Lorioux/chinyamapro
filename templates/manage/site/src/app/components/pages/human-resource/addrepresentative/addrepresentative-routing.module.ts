import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrepresentativeComponent } from './addrepresentative.component';

const routes: Routes = [{ path: '', component: AddrepresentativeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddrepresentativeRoutingModule { }

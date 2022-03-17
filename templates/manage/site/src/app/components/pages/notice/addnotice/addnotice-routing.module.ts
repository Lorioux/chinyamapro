import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnoticeComponent } from './addnotice.component';

const routes: Routes = [{ path: '', component: AddnoticeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddnoticeRoutingModule { }

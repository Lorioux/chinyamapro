import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlaborComponent } from './addlabor.component';

const routes: Routes = [{ path: '', component: AddlaborComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddlaborRoutingModule { }

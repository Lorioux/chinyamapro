import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressbarsComponent } from './progressbars.component';

const routes: Routes = [{ path: '', component: ProgressbarsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressbarsRoutingModule { }

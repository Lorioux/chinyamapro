import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultregisterComponent } from './defaultregister.component';

const routes: Routes = [{ path: '', component: DefaultregisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultregisterRoutingModule { }

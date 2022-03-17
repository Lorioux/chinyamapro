import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultloginComponent } from './defaultlogin.component';

const routes: Routes = [{ path: '', component: DefaultloginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultloginRoutingModule { }

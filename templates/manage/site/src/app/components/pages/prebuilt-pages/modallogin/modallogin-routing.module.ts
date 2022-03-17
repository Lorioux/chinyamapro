import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalloginComponent } from './modallogin.component';

const routes: Routes = [{ path: '', component: ModalloginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalloginRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglechartsComponent } from './googlecharts.component';

const routes: Routes = [{ path: '', component: GooglechartsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GooglechartsRoutingModule { }

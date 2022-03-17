import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddengineerComponent } from './addengineer.component';

const routes: Routes = [{ path: '', component: AddengineerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddengineerRoutingModule { }

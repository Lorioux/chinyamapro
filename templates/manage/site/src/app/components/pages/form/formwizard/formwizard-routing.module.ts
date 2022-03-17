import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormwizardComponent } from './formwizard.component';

const routes: Routes = [{ path: '', component: FormwizardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormwizardRoutingModule { }

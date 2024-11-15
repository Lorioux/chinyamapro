import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VectormapsComponent } from './vectormaps.component';

const routes: Routes = [{ path: '', component: VectormapsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VectormapsRoutingModule { }

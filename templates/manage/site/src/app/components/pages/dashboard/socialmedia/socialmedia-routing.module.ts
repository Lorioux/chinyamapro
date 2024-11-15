import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialmediaComponent } from './socialmedia.component';

const routes: Routes = [{ path: '', component: SocialmediaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialmediaRoutingModule { }

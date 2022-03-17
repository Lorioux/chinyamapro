import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticelistComponent } from './noticelist.component';

const routes: Routes = [{ path: '', component: NoticelistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticelistRoutingModule { }

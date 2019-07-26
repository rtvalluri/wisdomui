import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorsComponent } from './donors.component';

const routes: Routes = [{
  path: 'donors',
  component: DonorsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorsRoutingModule { }

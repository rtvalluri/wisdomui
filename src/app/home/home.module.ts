import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule, MatDividerModule, MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,

    SharedModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonorsRoutingModule } from './donors-routing.module';
import { DonorsComponent } from './donors.component';
import {
  MatPaginatorModule,
  MatCardModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatSortModule
} from '@angular/material';
import { SharedModule } from '../common/shared.module';

@NgModule({
  declarations: [DonorsComponent],
  imports: [
    CommonModule,
    DonorsRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    SharedModule
  ]
})
export class DonorsModule { }

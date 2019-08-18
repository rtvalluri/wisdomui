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
  MatSortModule,
  MatInputModule,
  MatFormFieldModule
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
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ]
})
export class DonorsModule { }

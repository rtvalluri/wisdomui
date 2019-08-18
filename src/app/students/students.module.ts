import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatPaginatorModule,
  MatCardModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { SharedModule } from '../common/shared.module';

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ]
})
export class StudentsModule { }

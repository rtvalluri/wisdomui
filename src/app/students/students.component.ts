import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from './students.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students$: Observable<any>;
  public studentsList: any;
  public displayedColumns: string[] = ['position', 'name', 'mentor', 'currentStatus'];
  public dataSource;
  public isLoading = false;
  public noDataReceived = false;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.loadStudents();
  }

  public loadStudents() {
    this.dataSource = undefined;
    this.isLoading = true;
    this.studentsService.getStudentsList().subscribe(data => {
      if (Array.isArray(data)) {
        this.noDataReceived = false;
        data.forEach((obj, index) => {
          obj['position'] = index + 1;
        })
        this.dataSource = new MatTableDataSource(data as any);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.noDataReceived = true;
      }
      this.isLoading = false;
    })
  }

}

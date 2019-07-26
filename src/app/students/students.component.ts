import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppStore } from '../app.store';
import { Store, select } from '@ngrx/store';
import { studentsFetchSuccess, studentsFetchInProgress } from '../actions/students.actions';
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

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    public http: HttpClient,
    public store: Store<typeof AppStore>,
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.students$ = this.store.select(state => state.students);
    // this.store.dispatch({ type: '<Students> fetch in progress' });

    this.studentsService.getStudentsList().subscribe(data => {
      if (Array.isArray(data)) {
        data.forEach((obj, index) => {
          obj['position'] = index + 1;
        })
      }
      this.dataSource = new MatTableDataSource(data as any);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}

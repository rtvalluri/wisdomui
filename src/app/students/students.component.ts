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
  public COMPONENT_NAME = 'Students Component';
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
    this.resetTableData();
    this.showLoader();
    this.studentsService.getStudentsList().subscribe(response => {
      this.handleStudentsResponse(response);
    }, error => {
      console.log('error occured');
      console.log(error);
    })
  }

  public handleStudentsResponse(data) {
    if (Array.isArray(data)) {
      if (this.noDataReceived) {
        this.hideNoDataReceivedMessage();
      }
      this.addPositionColumn(data);
      this.initMatTable(data);
    } else {
      this.showNoDataReceivedMessage();
    }
    this.hideLoader();
  }

  public addPositionColumn(data) {
    data.forEach((obj, index) => {
      obj['position'] = index + 1;
    })
  }

  public initMatTable(data) {
    this.dataSource = new MatTableDataSource(data as any);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public resetTableData() {
    this.dataSource = undefined;
  }

  public showLoader() {
    this.isLoading = true;
  }

  public hideLoader() {
    this.isLoading = false;
  }

  public showNoDataReceivedMessage() {
    this.noDataReceived = true;
  }

  public hideNoDataReceivedMessage() {
    this.noDataReceived = false;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { DonorsService } from './donors.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.scss']
})
export class DonorsComponent implements OnInit {
  public donorsList: any;
  public displayedColumns: string[] = ['position', 'name', 'workingIn'];
  public dataSource;
  public isLoading = false;
  public noDataReceived = false;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public donorsService: DonorsService
  ) { }

  ngOnInit() {
    this.loadDonors();
  }

  public loadDonors() {
    this.resetTableData();
    this.showLoader();
    this.donorsService.getDonorsList().subscribe(response => {
      this.handleDonorsResponse(response);
    }, error => {
      console.log('error occured');
      console.log(error);
    })
  }

  public handleDonorsResponse(data) {
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
    if (this.dataSource) {
      this.dataSource = undefined;
    }
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

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

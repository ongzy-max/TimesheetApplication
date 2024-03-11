import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TimesheetService } from '../services/timesheet.service';
import { Timesheet } from '../timesheet.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';

@Component({
  standalone: true,
  selector: 'app-user-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css'],
  imports: [CommonModule]
})
export class TimesheetListComponent implements OnInit {
  @NgModule({
    imports: [
        CommonModule
    ]
  })

  timesheets: Timesheet[] | undefined;
  searchTerm = this.route.snapshot.paramMap.get('searchTerm')
  constructor(private timesheetService: TimesheetService,
    private router: Router, 
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<any>) {
      this.route.paramMap.subscribe((params: any) => {
        this.ngOnInit();
    });
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.searchTerm = params.get('searchTerm');
      if (this.searchTerm && this.searchTerm !== '') {
        this.searchTask(this.searchTerm);
      } else {
        console.log("Entered All Task")
        this.allTask();
      }
    });
  }

  private searchTask(searchTerm: string) {
    console.log("Search Term: " + searchTerm)
    this.timesheetService.searchTimesheetList(searchTerm).subscribe((data: any) => {
      this.timesheets = data;
      console.log("Search Data" + data)
    });
  }

  private allTask() {
    this.timesheetService.getAllTimesheetList().subscribe((data: any) => {
      this.timesheets = data;
    });
  }

  updateTimesheet(timehsheetId: number, project: string, task: string, userId: number, fromDate: string, toDate: string, statusId: number) {
    
    this.dialogRef = this.dialog.open(PopupComponent, {
      data: {
        dataKey: timehsheetId,
        project: project,
        task: task,
        userId: userId,
        fromDate: fromDate,
        toDate: toDate,
        statusId: statusId
      }
    })
    
    this.dialogRef.afterClosed().subscribe((result: any) => {
      window.location.reload();
      this.dialogRef.close();
    })
  }

  deleteTimesheet(id: number) {

    this.dialogRef = this.dialog.open(DeletePopupComponent, {
      data: {
        dataKey: id
      }
    })

    this.dialogRef.afterClosed().subscribe((result: any) => {
      window.location.reload();
      this.dialogRef.close();
    })
    /*
    this.timesheetService.deleteTimesheetList(id).subscribe(result =>{
      window.location.reload();
    }) */
  }

  sortColumn: string = ''; // To keep track of the column being sorted
  sortOrder: string = 'asc'; // Initial sorting order

  sort(colName: string) {
    if (this.sortColumn === colName) {
      // If same column is clicked again, reverse the sorting order
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // If a new column is clicked, set the sorting column and order
      this.sortColumn = colName;
      this.sortOrder = 'asc';
    }

    // Sort the timesheets array based on the selected column and sorting order
    this.timesheets?.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
      const aValue = a[colName];
      const bValue = b[colName];
      if (aValue < bValue) return this.sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return this.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }
}


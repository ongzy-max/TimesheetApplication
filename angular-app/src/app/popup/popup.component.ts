import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Status } from '../status.model';
import { User } from '../user.model';
import { StatusService } from '../services/status.service';
import { UserService } from '../services/user.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { TimesheetService } from '../services/timesheet.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule,  FormsModule, ReactiveFormsModule, DatePipe],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  users: User[] | undefined;
  statuses: Status[] | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PopupComponent>,
    private userService: UserService,
    private statusService: StatusService,
    private timesheetService: TimesheetService,
    private formBuilder: FormBuilder,
    public datePipe: DatePipe
  ) { }

  start!: string;
  end!: string;
  message!: string;
  
  compareDates() {
    console.log("Entered Date Validation")
    const startDate = new Date(this.start).getTime();
    const endDate = new Date(this.end).getTime();

    if (endDate < startDate) {
      this.message = 'Start date must be before end date!';
    } else {
      this.message = '';
    }
  }

  timesheetForm = this.formBuilder.group({
    project: '',
    task: '',
    fromDate: '',
    toDate: '',
    userId: '',
    statusId: ''
  });

  ngOnInit() {
    this.allUser();
    this.allStatus();
    console.log("Data Key: " + this.data.dataKey)
    console.log("Project " + this.data.project)
    console.log("Task: " + this.data.task)
    console.log("User ID: " + this.data.userId)
    console.log("fromDate: " + this.data.fromDate)
    console.log("toDate: " + this.data.toDate)
    console.log("Status ID: " + this.data.statusId)
  }
  
  private allUser() {
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    });
  }
  private allStatus() {
    this.statusService.getStatusList().subscribe(data => {
      this.statuses = data;
      console.log("FIrst Status: " + data[0].status)
      console.log("First Status Id: " + data[0].id)
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    let formData = this.timesheetForm.value;
    formData.toDate = this.datePipe.transform(formData.toDate, 'dd/MM/yyyy')
    formData.fromDate = this.datePipe.transform(formData.fromDate, 'dd/MM/yyyy')
    console.log("Enter 1")
    console.log("Data Key: " + this.data.dataKey);
    console.log("Data Key Type:" + typeof this.data.dataKey);
    if (typeof this.data.dataKey === "string")
    {
      console.log("Enter 2")
      this.timesheetService.addTimesheetList(formData.project!, formData.task!, formData.fromDate!, formData.toDate!, parseInt(formData.statusId!), parseInt(formData.userId!)).subscribe(val => console.log(val))
    }

    else if (typeof this.data.dataKey === "number") {
      console.log("Enter 3")
      this.timesheetService.updateTimesheetList(this.data.dataKey,formData.project!, formData.task!, formData.fromDate!, formData.toDate!, parseInt(formData.statusId!), parseInt(formData.userId!)).subscribe(val => console.log(val))
    }
    
    this.dialogRef.close()
  }
}

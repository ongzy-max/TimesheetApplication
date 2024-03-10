import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { TimesheetService } from '../services/timesheet.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-popup',
  standalone: true,
  imports: [CommonModule,  FormsModule, ReactiveFormsModule],
  templateUrl: './delete-popup.component.html',
  styleUrl: './delete-popup.component.css'
})
export class DeletePopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private timesheetService: TimesheetService,
    private dialogRef: MatDialogRef<DeletePopupComponent>,
  ) { }

  closeDialog() {
    this.dialogRef.close();
  }

  onDelete() {
    this.timesheetService.deleteTimesheetList(this.data.dataKey).subscribe(result =>{
      this.closeDialog();})
  }

  onClose() {
    this.closeDialog()
  }
}

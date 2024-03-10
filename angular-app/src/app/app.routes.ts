import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button';
import { PopupComponent } from './popup/popup.component';
export const routes: Routes = [
  { path: 'search-task/:searchTerm', component: TimesheetListComponent },
  { path: 'search-task', component: TimesheetListComponent }
  //{ path: 'update-timesheet', component: PopupComponent },
  //{ path: 'create-timesheet', component: PopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, CommonModule, MatDialogModule, MatButtonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
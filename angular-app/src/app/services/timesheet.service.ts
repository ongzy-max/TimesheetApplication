import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timesheet } from '../timesheet.model';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  private allUrl = "http://localhost:8080/demo/allTimeSheet"
  private searchUrl = "http://localhost:8080/demo/searchTask"
  private updateUrl = "http://localhost:8080/demo/editTimesheet"
  private addUrl = "http://localhost:8080/demo/addTimesheet"
  private deleteUrl = "http://localhost:8080/demo/deleteTimesheet"

  constructor(private httpClient: HttpClient) {
  }

  getAllTimesheetList(): Observable<Timesheet[]> {
    
    return this.httpClient.get<Timesheet[]>(`${this.allUrl}`);
  }
  
  searchTimesheetList(searchTerm: string): Observable<Timesheet[]> {
    let params = new HttpParams().set('searchTask', searchTerm)
    return this.httpClient.post<Timesheet[]>(`${this.searchUrl}`, null, {params});
  }

  updateTimesheetList(timesheetId: number, project: string, task: string, fromDate: string, toDate: string, statusId: number, userId: number): Observable<any> {
    let params = new HttpParams()
    params = params.append('timesheetId', timesheetId);
    params = params.append('project', project);
    params = params.append('task', task);
    params = params.append('fromDate', fromDate);
    params = params.append('toDate', toDate);
    params = params.append('statusId', statusId);
    params = params.append('userId', userId);

    return this.httpClient.post(`${this.updateUrl}`, null, {params: params, responseType: 'text'});
  }

  addTimesheetList(project: string, task: string, fromDate: string, toDate: string, statusId: number, userId: number): Observable<any> {
    let params = new HttpParams()
    params = params.append('project', project);
    params = params.append('task', task);
    params = params.append('fromDate', fromDate);
    params = params.append('toDate', toDate);
    params = params.append('statusId', statusId);
    params = params.append('userId', userId);
    console.log("Called add TimeSheet")
    console.log("Params: " + params)
    return this.httpClient.post(`${this.addUrl}`, null, {params: params, responseType: 'text'});
  }

  deleteTimesheetList(timesheetId: number): Observable<any> {
    let params = new HttpParams()
    params = params.append('timesheetId', timesheetId);

    return this.httpClient.post(`${this.deleteUrl}`, null, {params: params, responseType: 'text'});
  }
} 
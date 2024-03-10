import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private basUrl = "http://localhost:8080/demo/allStatus"

  constructor(private httpClient: HttpClient) {
  }

  getStatusList(): Observable<Status[]> {
    return this.httpClient.get<Status[]>(`${this.basUrl}`);
  }
} 
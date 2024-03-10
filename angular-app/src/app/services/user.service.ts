import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private basUrl = "http://localhost:8080/demo/allUser"

  constructor(private httpClient: HttpClient) {
  }

  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.basUrl}`);
  }
} 
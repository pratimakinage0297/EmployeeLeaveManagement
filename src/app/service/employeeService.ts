import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../api.config';
import { loginModal } from '../Modal/Employee.Modal';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  onLogin(data: loginModal) {
    return this.http.post(API.LOGIN, data);
  }
}

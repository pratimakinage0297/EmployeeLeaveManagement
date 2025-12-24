import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../api.config';
import { ApiResponseModal, loginModal } from '../Modal/Employee.Modal';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient, private route: Router) {}
  onLogin(data: loginModal) {
    return this.http.post(API.LOGIN, data);
  }

  onLogoutUser() {
    localStorage.removeItem('loggedInUser');
    this.route.navigate(['/']);
  }

  getAllEmployee(): Observable<ApiResponseModal> {
    return this.http.get<ApiResponseModal>(API.GET_ALL_EMPLOYEE);
  }

  getDepartments(): Observable<ApiResponseModal> {
    return this.http.get<ApiResponseModal>(API.GET_DEPARTMENTS);
  }
}

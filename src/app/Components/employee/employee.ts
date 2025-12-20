import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employeeService';
import { Observable } from 'rxjs';
import { ApiResponseModal, EmployeeModel } from '../../Modal/Employee.Modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {
  allEmployee: EmployeeModel[] = [];
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe({
      next: (res: ApiResponseModal) => {
        this.allEmployee = res.data;
        console.log('All employees', this.allEmployee);
      },
      error: () => {},
    });
  }
}

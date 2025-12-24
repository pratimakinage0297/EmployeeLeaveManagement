import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employeeService';
import { Observable } from 'rxjs';
import { ApiResponseModal, DepartmentModel, EmployeeModel } from '../../Modal/Employee.Modal';
import { CommonModule } from '@angular/common';
import { AddEmployeeModal } from '../../ModalComponent/add-employee-modal/add-employee-modal';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, AddEmployeeModal],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {
  AllDepartment: DepartmentModel[] = [];
  showAddEmployeeModal: boolean = false;
  allEmployee: EmployeeModel[] = [];
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }

  openModal() {
    this.showAddEmployeeModal = true;
    this.getAllDepartment();
  }

  CloseModal() {
    this.showAddEmployeeModal = false;
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

  getAllDepartment() {
    this.empService.getDepartments().subscribe({
      next: (res: ApiResponseModal) => {
        if (res.result) {
          // this.AllDepartment = res.data.deptName;
          this.AllDepartment = res.data.map((d: DepartmentModel) => ({
            deptName: d.deptName,
          }));
          console.log('all department data', this.AllDepartment);
        }
      },
      error: (res: ApiResponseModal) => {
        alert(res.message);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employeeService';
import { map, Observable } from 'rxjs';
import { ApiResponseModal, DepartmentModel, EmployeeModel, Role } from '../../Modal/Employee.Modal';
import { CommonModule } from '@angular/common';
import { AddEmployeeModal } from '../../ModalComponent/add-employee-modal/add-employee-modal';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, AddEmployeeModal, FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {
  AllDepartment: DepartmentModel[] = [];
  showAddEmployeeModal: boolean = false;
  allEmployee: EmployeeModel[] = [];
  roleList$: Observable<Role[]> | undefined;

  employeeObj: EmployeeModel = new EmployeeModel();

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployee();
    this.roleList$ = this.empService.getAllRoles().pipe(map((res) => res.data));
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

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('form values', this.employeeObj);
    this.empService.createEmployee(this.employeeObj).subscribe({
      next: (res: ApiResponseModal) => {
        alert('Employee created successfully');
        this.CloseModal();
        this.getAllEmployee();
      },
      error: (res: ApiResponseModal) => {
        alert(res.message);
      },
    });
  }
}

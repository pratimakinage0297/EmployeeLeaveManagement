export class loginModal {
  emailId: string;
  password: string;

  constructor() {
    this.emailId = '';
    this.password = '';
  }
}
export interface ApiResponseModal {
  message: string;
  result: boolean;
  data: any;
}

export interface EmployeeModel {
  employeeId: number;
  employeeName: string;
  deptId: number;
  deptName: string;
  contactNo: string;
  emailId: string;
  role: string;
}

export interface DepartmentModel {
  // deptId: number;
  deptName: string;
}

export type Role = string;

export class EmployeeModel {
  employeeId: number;
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: number;
  password: string;
  gender: string;
  role: string;

  constructor() {
    this.employeeId = 0;
    this.contactNo = '';
    this.deptId = 0;
    this.emailId = '';
    this.employeeName = '';
    this.gender = '';
    this.password = '';
    this.role = '';
  }
}

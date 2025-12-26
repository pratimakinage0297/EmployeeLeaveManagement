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

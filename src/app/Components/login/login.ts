import { Component } from '@angular/core';
import { loginModal } from '../../Modal/Employee.Modal';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../service/employeeService';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: loginModal = {
    emailId: '',
    password: '',
  };

  constructor(private empService: EmployeeService, private route: Router) {}

  onSubmit() {
    this.empService.onLogin(this.loginObj).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/dashboard']);
    });
    // console.log(this.loginObj);
  }
}

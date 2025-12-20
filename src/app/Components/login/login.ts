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
    this.empService.onLogin(this.loginObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          alert('login successfull');
          localStorage.setItem('loggedInUser', JSON.stringify(res.data));
          console.log(res);
          this.route.navigate(['/dashboard']);
        } else {
          alert(res.message);
        }
      },
      error: () => {
        alert('API Error');
      },
    });
    // console.log(this.loginObj);
  }
}

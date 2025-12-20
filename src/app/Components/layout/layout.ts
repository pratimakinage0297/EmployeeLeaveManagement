import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../service/employeeService';

@Component({
  selector: 'app-layout',
  imports: [RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  constructor(private empService: EmployeeService) {}

  onLogout() {
    this.empService.onLogoutUser();
  }
}

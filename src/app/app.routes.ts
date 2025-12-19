import { Routes } from '@angular/router';
import { Login } from './Components/login/login';
import { Layout } from './Components/layout/layout';
import { Dashboard } from './Components/dashboard/dashboard';
import { Employee } from './Components/employee/employee';
import { Leave } from './Components/leave/leave';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  // after login we access all the component here
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'employee',
        component: Employee,
      },
      {
        path: 'leave',
        component: Leave,
      },
    ],
  },
];

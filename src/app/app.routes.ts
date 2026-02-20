import { roleGuard } from '../guards/role-guard';
import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Home } from './components/home/home';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { Organization } from './components/pages/organization/organization';
import { Attendance } from './components/pages/attendance/attendance';
import { Events } from './components/pages/events/events';
import { Payments } from './components/pages/payments/payments';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },

  {
    path: 'home',
    component: Home,
    canActivate: [roleGuard],   // 👈 protect entire home
    children: [
      { path: '', component: Dashboard },
      { path: 'dashboard', component: Dashboard },
      { 
        path: 'events', 
        component: Events,
        canActivate: [roleGuard], 
        data: { role: 'admin' }   // 👈 only admin
      },
      { 
        path: 'organization', 
        component: Organization,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      },
      { 
        path: 'attendance', 
        component: Attendance,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      },
      { 
        path: 'payments', 
        component: Payments,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      }
    ]
  }
];

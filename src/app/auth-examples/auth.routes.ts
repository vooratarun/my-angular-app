import { Routes } from '@angular/router';
import { AuthHomeComponent } from './auth-home.component';
import { AuthShellComponent } from './auth-shell.component';
import { DashboardComponent } from './dashboard.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { LoginComponent } from './login.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthShellComponent,
    children: [
      {
        path: '',
        component: AuthHomeComponent,
      },
      {
        path: 'login',
        canActivate: [guestGuard],
        component: LoginComponent,
      },
      {
        path: 'dashboard',
        canActivate: [authGuard],
        component: DashboardComponent,
      },
    ],
  },
];


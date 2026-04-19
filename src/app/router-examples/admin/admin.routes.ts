import { Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';
import { AdminSettingsComponent } from './admin-settings.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
  },
  {
    path: 'settings',
    component: AdminSettingsComponent,
  },
];


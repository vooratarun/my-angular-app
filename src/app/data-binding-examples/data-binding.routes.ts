import { Routes } from '@angular/router';
import { DataBindingDemoComponent } from './data-binding-demo.component';
import { DataBindingHomeComponent } from './data-binding-home.component';
import { DataBindingShellComponent } from './data-binding-shell.component';

export const DATA_BINDING_ROUTES: Routes = [
  {
    path: '',
    component: DataBindingShellComponent,
    children: [
      {
        path: '',
        component: DataBindingHomeComponent,
      },
      {
        path: 'all',
        component: DataBindingDemoComponent,
      },
    ],
  },
];


import { Routes } from '@angular/router';
import { OnpushDemoComponent } from './onpush-demo.component';
import { PerformanceHomeComponent } from './performance-home.component';
import { PerformanceShellComponent } from './performance-shell.component';
import { TrackbyDemoComponent } from './trackby-demo.component';

export const PERFORMANCE_ROUTES: Routes = [
  {
    path: '',
    component: PerformanceShellComponent,
    children: [
      {
        path: '',
        component: PerformanceHomeComponent,
      },
      {
        path: 'onpush',
        component: OnpushDemoComponent,
      },
      {
        path: 'trackby',
        component: TrackbyDemoComponent,
      },
      {
        path: 'code-splitting',
        loadComponent: () =>
          import('./code-splitting-demo.component').then((m) => m.CodeSplittingDemoComponent),
      },
    ],
  },
];


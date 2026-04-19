import { Routes } from '@angular/router';
import { FormsHomeComponent } from './forms-home.component';
import { FormsShellComponent } from './forms-shell.component';

export const FORMS_ROUTES: Routes = [
  {
    path: '',
    component: FormsShellComponent,
    children: [
      {
        path: '',
        component: FormsHomeComponent,
      },
      {
        path: 'template',
        loadChildren: () =>
          import('./template-forms/template-forms.routes').then((m) => m.TEMPLATE_FORMS_ROUTES),
      },
      {
        path: 'reactive-control',
        loadChildren: () =>
          import('./reactive-form-control/reactive-form-control.routes').then(
            (m) => m.REACTIVE_FORM_CONTROL_ROUTES,
          ),
      },
      {
        path: 'reactive-group',
        loadChildren: () =>
          import('./reactive-form-group/reactive-form-group.routes').then(
            (m) => m.REACTIVE_FORM_GROUP_ROUTES,
          ),
      },
    ],
  },
];


import { Routes } from '@angular/router';
import { EcommerceCartServiceStateComponent } from './ecommerce-cart-service-state.component';
import { EcommerceCartSignalsStateComponent } from './ecommerce-cart-signals-state.component';
import { NgrxBasicsComponent } from './ngrx-basics.component';
import { StateHomeComponent } from './state-home.component';
import { StateShellComponent } from './state-shell.component';

export const STATE_MANAGEMENT_ROUTES: Routes = [
  {
    path: '',
    component: StateShellComponent,
    children: [
      {
        path: '',
        component: StateHomeComponent,
      },
      {
        path: 'service-state',
        component: EcommerceCartServiceStateComponent,
      },
      {
        path: 'signals-state',
        component: EcommerceCartSignalsStateComponent,
      },
      {
        path: 'ngrx-basics',
        component: NgrxBasicsComponent,
      },
    ],
  },
];


import { Routes } from '@angular/router';
import { CartCounterSignalsComponent } from './cart-counter-signals.component';
import { ComputedDemoComponent } from './computed-demo.component';
import { EffectDemoComponent } from './effect-demo.component';
import { SignalDemoComponent } from './signal-demo.component';
import { SignalsHomeComponent } from './signals-home.component';
import { SignalsShellComponent } from './signals-shell.component';

export const SIGNALS_ROUTES: Routes = [
  {
    path: '',
    component: SignalsShellComponent,
    children: [
      {
        path: '',
        component: SignalsHomeComponent,
      },
      {
        path: 'signal',
        component: SignalDemoComponent,
      },
      {
        path: 'computed',
        component: ComputedDemoComponent,
      },
      {
        path: 'effect',
        component: EffectDemoComponent,
      },
      {
        path: 'cart-counter',
        component: CartCounterSignalsComponent,
      },
    ],
  },
];


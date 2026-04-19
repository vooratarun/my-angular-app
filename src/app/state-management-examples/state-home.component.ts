import { Component } from '@angular/core';

@Component({
  selector: 'app-state-home',
  standalone: true,
  template: `
    <article>
      <h3>State Management Overview</h3>
      <p>
        This section shows two mini ecommerce carts:
        service state (RxJS BehaviorSubject) and signals state (signal/computed).
      </p>
      <p>
        The NgRx page is optional and explains core store concepts without adding new dependencies.
      </p>
    </article>
  `,
})
export class StateHomeComponent {}


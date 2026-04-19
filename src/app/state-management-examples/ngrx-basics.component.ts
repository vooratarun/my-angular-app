import { Component } from '@angular/core';

@Component({
  selector: 'app-ngrx-basics',
  standalone: true,
  template: `
    <section class="panel">
      <h3>NgRx Basics (Optional)</h3>
      <p>
        Use NgRx when state grows large across features and you need strict unidirectional flow.
      </p>
      <ul>
        <li><strong>Actions</strong>: events that describe what happened.</li>
        <li><strong>Reducer</strong>: pure function that updates state from actions.</li>
        <li><strong>Selectors</strong>: memoized queries to read slices of store state.</li>
        <li><strong>Effects</strong>: side effects for API calls and async workflows.</li>
      </ul>
      <p>
        Optional install command for later exploration: <code>npm i @ngrx/store @ngrx/effects</code>.
      </p>
    </section>
  `,
  styles: [
    `
      .panel { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; }
    `,
  ],
})
export class NgrxBasicsComponent {}


import { Component } from '@angular/core';

@Component({
  selector: 'app-code-splitting-demo',
  standalone: true,
  template: `
    <section class="panel">
      <h3>Code Splitting Example</h3>
      <p>
        This page is loaded via route <code>loadComponent</code>, so Angular places it into a separate chunk.
      </p>
      <p>
        Combined with feature-level <code>loadChildren</code>, this keeps initial bundles smaller.
      </p>
    </section>
  `,
  styles: [
    `
      .panel { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; }
    `,
  ],
})
export class CodeSplittingDemoComponent {}


import { Component } from '@angular/core';

@Component({
  selector: 'app-performance-home',
  standalone: true,
  template: `
    <article>
      <h3>Performance Overview</h3>
      <ul>
        <li><strong>Lazy loading:</strong> this entire feature is lazy-loaded via route config.</li>
        <li><strong>OnPush:</strong> optimize change detection using immutable updates.</li>
        <li><strong>trackBy:</strong> reduce DOM recreation in long lists.</li>
        <li><strong>Standalone components:</strong> all demo components are standalone.</li>
        <li><strong>Code splitting:</strong> route-level chunks and a child <code>loadComponent</code> demo.</li>
      </ul>
    </article>
  `,
})
export class PerformanceHomeComponent {}


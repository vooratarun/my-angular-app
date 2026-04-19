import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <section>
      <h2>Angular Data Binding Examples</h2>
      <p>Explore interpolation, property/event binding, two-way binding, and class/style/attribute bindings.</p>

      <nav style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <a routerLink="./" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Overview</a>
        <a routerLink="./all" routerLinkActive="active">All Bindings Demo</a>
      </nav>

      <router-outlet></router-outlet>
    </section>
  `,
})
export class DataBindingShellComponent {}


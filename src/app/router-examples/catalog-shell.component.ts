import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-catalog-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <section>
      <h2>Child Routes</h2>
      <p>These links render into the nested <code>RouterOutlet</code> below.</p>

      <nav style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        <a routerLink="./" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Overview</a>
        <a routerLink="./keyboard" routerLinkActive="active">Keyboard</a>
        <a routerLink="./mouse" routerLinkActive="active">Mouse</a>
      </nav>

      <router-outlet></router-outlet>
    </section>
  `,
})
export class CatalogShellComponent {}


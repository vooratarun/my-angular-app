import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-performance-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <section>
      <h2>Angular Performance + Optimization</h2>
      <p>Examples for lazy loading, OnPush, trackBy, standalone components, and code splitting.</p>

      <nav style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <a routerLink="./" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Overview</a>
        <a routerLink="./onpush" routerLinkActive="active">OnPush</a>
        <a routerLink="./trackby" routerLinkActive="active">trackBy</a>
        <a routerLink="./code-splitting" routerLinkActive="active">Code Splitting</a>
      </nav>

      <router-outlet></router-outlet>
    </section>
  `,
})
export class PerformanceShellComponent {}


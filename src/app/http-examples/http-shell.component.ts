import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-http-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <section>
      <h2>Angular HTTP + APIs (JSONPlaceholder)</h2>
      <p>Practice HttpClient, interceptors, and error handling with CRUD routes.</p>

      <nav style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <a routerLink="./" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Overview</a>
        <a routerLink="./get" routerLinkActive="active">GET</a>
        <a routerLink="./post" routerLinkActive="active">POST</a>
        <a routerLink="./put" routerLinkActive="active">PUT</a>
        <a routerLink="./delete" routerLinkActive="active">DELETE</a>
      </nav>

      <router-outlet></router-outlet>
    </section>
  `,
})
export class HttpShellComponent {}


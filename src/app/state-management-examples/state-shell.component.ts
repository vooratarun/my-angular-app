import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-state-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <section>
      <h2>Angular State Management</h2>
      <p>Compare service state and signals state with a mini ecommerce cart demo.</p>

      <nav style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <a routerLink="./" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Overview</a>
        <a routerLink="./service-state" routerLinkActive="active">Service State</a>
        <a routerLink="./signals-state" routerLinkActive="active">Signals State</a>
        <a routerLink="./ngrx-basics" routerLinkActive="active">NgRx Basics</a>
      </nav>

      <router-outlet></router-outlet>
    </section>
  `,
})
export class StateShellComponent {}


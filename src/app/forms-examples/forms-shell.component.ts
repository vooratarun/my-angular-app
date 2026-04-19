import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forms-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <section>
      <h2>Angular Forms Mastery</h2>
      <p>
        Learn template-driven and reactive forms with examples for FormControl, FormGroup,
        validators, and custom validators.
      </p>

      <nav style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <a routerLink="./" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Overview</a>
        <a routerLink="./template" routerLinkActive="active">Template Forms</a>
        <a routerLink="./reactive-control" routerLinkActive="active">Reactive FormControl</a>
        <a routerLink="./reactive-group" routerLinkActive="active">Reactive FormGroup</a>
      </nav>

      <router-outlet></router-outlet>
    </section>
  `,
})
export class FormsShellComponent {}


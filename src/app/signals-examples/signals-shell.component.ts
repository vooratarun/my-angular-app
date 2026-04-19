import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signals-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <section>
      <h2>Angular Signals (Modern Angular)</h2>
      <p>Learn signal(), computed(), effect(), and a cart counter built with signals.</p>

      <nav style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <a routerLink="./" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Overview</a>
        <a routerLink="./signal" routerLinkActive="active">signal()</a>
        <a routerLink="./computed" routerLinkActive="active">computed()</a>
        <a routerLink="./effect" routerLinkActive="active">effect()</a>
        <a routerLink="./cart-counter" routerLinkActive="active">Cart Counter</a>
      </nav>

      <router-outlet></router-outlet>
    </section>
  `,
})
export class SignalsShellComponent {}


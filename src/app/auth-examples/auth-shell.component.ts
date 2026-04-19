import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <section>
      <h2>Angular Guards + Auth</h2>
      <p>Learn Auth Guard, Route Guard behavior, JWT flow, and token storage.</p>

      <p>
        Current user:
        <strong>{{ authService.username() ?? 'Guest' }}</strong>
      </p>

      <nav style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <a routerLink="./" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Overview</a>
        <a routerLink="./login" routerLinkActive="active">Login</a>
        <a routerLink="./dashboard" routerLinkActive="active">Protected Dashboard</a>
        <button type="button" (click)="logout()">Logout</button>
      </nav>

      <router-outlet></router-outlet>
    </section>
  `,
})
export class AuthShellComponent {
  readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}


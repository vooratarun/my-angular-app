import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="panel">
      <h3>Protected Dashboard</h3>
      <p>This page is protected by <code>authGuard</code>.</p>

      <p>Authenticated user: <strong>{{ authService.username() }}</strong></p>
      <button type="button" (click)="loadProtectedData()">Call Protected API</button>

      <p *ngIf="apiStatus">{{ apiStatus }}</p>
    </section>
  `,
  styles: [
    `
      .panel { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; }
    `,
  ],
})
export class DashboardComponent {
  readonly authService = inject(AuthService);
  private readonly http = inject(HttpClient);

  apiStatus = '';

  loadProtectedData(): void {
    this.apiStatus = 'Loading protected data...';

    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe({
      next: () => {
        this.apiStatus = 'API call succeeded (Authorization header attached by interceptor).';
      },
      error: (error: unknown) => {
        this.apiStatus = error instanceof Error ? error.message : 'API call failed.';
      },
    });
  }
}


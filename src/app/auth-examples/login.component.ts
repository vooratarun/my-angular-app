import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="panel">
      <h3>Login (JWT Flow)</h3>

      <label>Username <input [(ngModel)]="username" /></label>
      <label>Password <input type="password" [(ngModel)]="password" /></label>

      <button type="button" (click)="login()">Login</button>
      <p *ngIf="message">{{ message }}</p>
    </section>
  `,
  styles: [
    `
      .panel { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; }
      label { display: grid; gap: 0.35rem; margin-bottom: 0.5rem; max-width: 420px; }
    `,
  ],
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  username = 'demo.user';
  password = 'password';
  message = '';

  login(): void {
    const success = this.authService.login(this.username, this.password);

    if (!success) {
      this.message = 'Please provide username and password.';
      return;
    }

    this.message = 'Login successful. Redirecting to dashboard...';
    this.router.navigate(['/auth/dashboard']);
  }
}


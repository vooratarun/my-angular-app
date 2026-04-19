import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section>
      <h2>Lazy Loaded Admin</h2>
      <p>This feature is loaded only when navigating to <code>/admin</code>.</p>
      <a routerLink="/admin/settings">Go to admin settings</a>
    </section>
  `,
})
export class AdminHomeComponent {}


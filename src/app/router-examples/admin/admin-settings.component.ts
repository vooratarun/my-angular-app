import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section>
      <h2>Admin Settings</h2>
      <p>You are inside the lazy-loaded route child: <code>/admin/settings</code>.</p>
      <a routerLink="/admin">Back to admin home</a>
    </section>
  `,
})
export class AdminSettingsComponent {}


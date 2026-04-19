import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-routing-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section>
      <h2>RouterOutlet + Routes</h2>
      <p>
        This page is rendered inside the top-level <code>RouterOutlet</code> from
        <code>app.component.html</code>.
      </p>
      <ul>
        <li><a routerLink="/users">Dynamic params example</a></li>
        <li><a routerLink="/catalog">Child routes example</a></li>
        <li><a routerLink="/admin">Lazy loading example</a></li>
        <li><a routerLink="/forms">Forms mastery examples</a></li>
      </ul>
    </section>
  `,
})
export class RoutingHomeComponent {}


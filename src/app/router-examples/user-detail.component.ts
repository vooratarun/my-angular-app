import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section>
      <h2>User Detail</h2>
      <p>
        Route: <code>/users/:id</code><br />
        Current id: <strong>{{ userId$ | async }}</strong>
      </p>

      <p>
        <a routerLink="/users/777">Load id 777 (same component, new param)</a>
      </p>
      <p><a routerLink="/users">Back to users list</a></p>
    </section>
  `,
})
export class UserDetailComponent {
  private readonly route = inject(ActivatedRoute);
  readonly userId$ = this.route.paramMap.pipe(
        map((params) => params.get('id') ?? 'unknown')
  );
}


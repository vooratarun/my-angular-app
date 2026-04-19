import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forms-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article>
      <h3>Forms Overview</h3>
      <p>
        Use <a routerLink="/forms/template">Template Forms</a> for simple, template-first forms,
        and prioritize <a routerLink="/forms/reactive-group">Reactive Forms</a> for scalable validation logic.
      </p>
    </article>
  `,
})
export class FormsHomeComponent {}


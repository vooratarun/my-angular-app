import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signals-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article>
      <h3>Signals Overview</h3>
      <p>
        Start with <a routerLink="/signals/signal">signal()</a>, then move to
        <a routerLink="/signals/computed">computed()</a>,
        <a routerLink="/signals/effect">effect()</a>, and finally
        <a routerLink="/signals/cart-counter">Cart Counter</a>.
      </p>
    </article>
  `,
})
export class SignalsHomeComponent {}


import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-home',
  standalone: true,
  template: `
    <article>
      <h3>Auth Flow Overview</h3>
      <ol>
        <li>Login generates a fake JWT with expiry.</li>
        <li>Token is stored in localStorage.</li>
        <li>Auth guard protects dashboard route.</li>
        <li>Interceptor attaches Bearer token to outgoing HTTP requests.</li>
      </ol>
    </article>
  `,
})
export class AuthHomeComponent {}


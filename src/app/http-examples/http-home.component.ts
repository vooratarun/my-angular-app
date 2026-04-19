import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-http-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article>
      <h3>HTTP Learning Overview</h3>
      <p>
        JSONPlaceholder is a fake REST API good for learning request flows. Navigate to
        <a routerLink="/http-api/get">GET</a>, <a routerLink="/http-api/post">POST</a>,
        <a routerLink="/http-api/put">PUT</a>, and <a routerLink="/http-api/delete">DELETE</a>
        routes for focused CRUD examples.
      </p>
    </article>
  `,
})
export class HttpHomeComponent {}


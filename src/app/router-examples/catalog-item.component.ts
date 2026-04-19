import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-catalog-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <h3>Catalog Item Detail</h3>
      <p>Child route param <code>:itemId</code> = <strong>{{ itemId$ | async }}</strong></p>
    </article>
  `,
})
export class CatalogItemComponent {
  private readonly route = inject(ActivatedRoute);
  readonly itemId$ = this.route.paramMap.pipe(map((params) => params.get('itemId') ?? 'missing'));
}


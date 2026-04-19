import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-overview',
  standalone: true,
  template: `
    <article>
      <h3>Catalog Overview</h3>
      <p>Select an item route to load child details.</p>
    </article>
  `,
})
export class CatalogOverviewComponent {}


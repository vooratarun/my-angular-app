import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-home',
  standalone: true,
  template: `
    <article>
      <h3>Data Binding Overview</h3>
      <ul>
        <li><strong>Interpolation:</strong> show component values in template text.</li>
        <li><strong>Property binding:</strong> set element/component properties.</li>
        <li><strong>Event binding:</strong> call component methods from UI events.</li>
        <li><strong>Two-way binding:</strong> sync input and model with <code>[(ngModel)]</code>.</li>
        <li><strong>Class/Style/Attribute:</strong> dynamic UI updates from state.</li>
      </ul>
    </article>
  `,
})
export class DataBindingHomeComponent {}


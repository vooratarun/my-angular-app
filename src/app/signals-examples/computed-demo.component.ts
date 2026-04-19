import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="panel">
      <h3>computed()</h3>
      <p>computed() derives reactive values from one or more signals.</p>

      <p>Price: {{ price() }}</p>
      <p>Quantity: {{ quantity() }}</p>
      <p><strong>Total: {{ total() }}</strong></p>

      <button type="button" (click)="increaseQuantity()">Add Quantity</button>
      <button type="button" (click)="decreaseQuantity()">Reduce Quantity</button>
    </section>
  `,
  styles: [
    `
      .panel { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; }
      button { margin-right: 0.5rem; }
    `,
  ],
})
export class ComputedDemoComponent {
  price = signal(250);
  quantity = signal(1);
  total = computed(() => this.price() * this.quantity());

  increaseQuantity(): void {
    this.quantity.update((value) => value + 1);
  }

  decreaseQuantity(): void {
    this.quantity.update((value) => Math.max(1, value - 1));
  }
}


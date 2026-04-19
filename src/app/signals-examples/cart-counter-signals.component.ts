import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart-counter-signals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="panel">
      <h3>Cart Counter using Signals</h3>
      <p>Cart state is managed with signal() and totals are derived with computed().</p>

      <ul>
        <li *ngFor="let item of items">
          <strong>{{ item.name }}</strong> - {{ item.price | currency: 'USD' : 'symbol' : '1.0-0' }}
          <div>
            <button type="button" (click)="decrease(item.id)">-</button>
            <span>{{ getQuantity(item.id) }}</span>
            <button type="button" (click)="increase(item.id)">+</button>
          </div>
        </li>
      </ul>

      <p><strong>Total Items:</strong> {{ totalItems() }}</p>
      <p><strong>Total Price:</strong> {{ totalPrice() | currency: 'USD' : 'symbol' : '1.0-0' }}</p>

      <button type="button" (click)="clearCart()">Clear Cart</button>
    </section>
  `,
  styles: [
    `
      .panel { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; }
      li { margin-bottom: 0.5rem; }
      div { display: inline-flex; gap: 0.5rem; margin-left: 0.75rem; align-items: center; }
    `,
  ],
})
export class CartCounterSignalsComponent {
  readonly items: CartItem[] = [
    { id: 1, name: 'Keyboard', price: 1000 },
    { id: 2, name: 'Mouse', price: 500 },
    { id: 3, name: 'Monitor', price: 8000 },
  ];

  private readonly quantities = signal<Record<number, number>>({});

  readonly totalItems = computed(() =>
    Object.values(this.quantities()).reduce((sum, quantity) => sum + quantity, 0),
  );

  readonly totalPrice = computed(() =>
    this.items.reduce((sum, item) => sum + item.price * (this.quantities()[item.id] ?? 0), 0),
  );

  getQuantity(itemId: number): number {
    return this.quantities()[itemId] ?? 0;
  }

  increase(itemId: number): void {
    this.quantities.update((current) => ({
      ...current,
      [itemId]: (current[itemId] ?? 0) + 1,
    }));
  }

  decrease(itemId: number): void {
    this.quantities.update((current) => {
      const next = Math.max((current[itemId] ?? 0) - 1, 0);
      return {
        ...current,
        [itemId]: next,
      };
    });
  }

  clearCart(): void {
    this.quantities.set({});
  }
}


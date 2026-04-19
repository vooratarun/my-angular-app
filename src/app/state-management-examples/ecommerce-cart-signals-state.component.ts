import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { CartSignalsStateService } from './services/cart-signals-state.service';

@Component({
  selector: 'app-ecommerce-cart-signals-state',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  template: `
    <section class="panel">
      <h3>Mini Ecommerce Cart - Signals State</h3>
      <p>State uses signal() and derived totals use computed().</p>

      <ul>
        <li *ngFor="let product of products">
          {{ product.name }} - {{ product.price | currency : 'USD' : 'symbol' : '1.0-0' }}
          <button type="button" (click)="cart.addToCart(product)">Add</button>
        </li>
      </ul>

      <h4>Cart Items</h4>
      <ul>
        <li *ngFor="let item of cart.items()">
          {{ item.name }} x {{ item.quantity }}
          <button type="button" (click)="cart.decrease(item.id)">-</button>
          <button type="button" (click)="cart.addToCart(item)">+</button>
        </li>
      </ul>

      <p><strong>Total Items:</strong> {{ cart.totalItems() }}</p>
      <p><strong>Total Price:</strong> {{ cart.totalPrice() | currency : 'USD' : 'symbol' : '1.0-0' }}</p>
      <button type="button" (click)="cart.clear()">Clear Cart</button>
    </section>
  `,
  styles: [
    `
      .panel { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; }
      button { margin-left: 0.5rem; }
    `,
  ],
})
export class EcommerceCartSignalsStateComponent {
  readonly products: Product[] = [
    { id: 1, name: 'Keyboard', price: 1000 },
    { id: 2, name: 'Mouse', price: 500 },
    { id: 3, name: 'Monitor', price: 8000 },
  ];

  constructor(public readonly cart: CartSignalsStateService) {}
}


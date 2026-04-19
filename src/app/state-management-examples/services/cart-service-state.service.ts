import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartItem, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartServiceStateService {
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>([]);

  readonly items$ = this.itemsSubject.asObservable();
  readonly totalItems$ = this.items$.pipe(
    map((items) => items.reduce((sum, item) => sum + item.quantity, 0)),
  );
  readonly totalPrice$ = this.items$.pipe(
    map((items) => items.reduce((sum, item) => sum + item.price * item.quantity, 0)),
  );

  addToCart(product: Product): void {
    const items = this.itemsSubject.getValue();
    const existing = items.find((item) => item.id === product.id);

    if (existing) {
      this.itemsSubject.next(
        items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
      return;
    }

    this.itemsSubject.next([...items, { ...product, quantity: 1 }]);
  }

  decrease(productId: number): void {
    const next = this.itemsSubject
      .getValue()
      .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
      .filter((item) => item.quantity > 0);

    this.itemsSubject.next(next);
  }

  clear(): void {
    this.itemsSubject.next([]);
  }
}


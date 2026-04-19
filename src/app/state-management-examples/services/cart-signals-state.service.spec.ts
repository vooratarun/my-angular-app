import { CartSignalsStateService } from './cart-signals-state.service';

describe('CartSignalsStateService', () => {
  it('updates totals with signals state changes', () => {
    const service = new CartSignalsStateService();

    service.addToCart({ id: 1, name: 'Keyboard', price: 1000 });
    service.addToCart({ id: 1, name: 'Keyboard', price: 1000 });
    service.addToCart({ id: 2, name: 'Mouse', price: 500 });

    expect(service.totalItems()).toBe(3);
    expect(service.totalPrice()).toBe(2500);
  });
});


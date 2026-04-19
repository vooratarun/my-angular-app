import { CartCounterSignalsComponent } from './cart-counter-signals.component';

describe('CartCounterSignalsComponent', () => {
  it('updates totals when quantity changes', () => {
    const component = new CartCounterSignalsComponent();

    component.increase(1);
    component.increase(1);
    component.increase(2);

    expect(component.totalItems()).toBe(3);
    expect(component.totalPrice()).toBe(2500);
  });

  it('clears cart totals', () => {
    const component = new CartCounterSignalsComponent();

    component.increase(3);
    component.clearCart();

    expect(component.totalItems()).toBe(0);
    expect(component.totalPrice()).toBe(0);
  });
});


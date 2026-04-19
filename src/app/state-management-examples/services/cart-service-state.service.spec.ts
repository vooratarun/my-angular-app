import { firstValueFrom } from 'rxjs';
import { CartServiceStateService } from './cart-service-state.service';

describe('CartServiceStateService', () => {
  it('updates totals with service state changes', async () => {
    const service = new CartServiceStateService();

    service.addToCart({ id: 1, name: 'Keyboard', price: 1000 });
    service.addToCart({ id: 1, name: 'Keyboard', price: 1000 });
    service.addToCart({ id: 2, name: 'Mouse', price: 500 });

    const totalItems = await firstValueFrom(service.totalItems$);
    const totalPrice = await firstValueFrom(service.totalPrice$);

    expect(totalItems).toBe(3);
    expect(totalPrice).toBe(2500);
  });
});


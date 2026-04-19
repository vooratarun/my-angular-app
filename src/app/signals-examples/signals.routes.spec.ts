import { SIGNALS_ROUTES } from './signals.routes';

describe('signals routes', () => {
  it('contains signal learning child routes', () => {
    const shellRoute = SIGNALS_ROUTES[0];
    const childPaths = shellRoute.children?.map((route) => route.path) ?? [];

    expect(childPaths).toContain('signal');
    expect(childPaths).toContain('computed');
    expect(childPaths).toContain('effect');
    expect(childPaths).toContain('cart-counter');
  });
});


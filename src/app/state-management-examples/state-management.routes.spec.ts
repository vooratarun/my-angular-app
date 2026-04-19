import { STATE_MANAGEMENT_ROUTES } from './state-management.routes';

describe('state management routes', () => {
  it('contains service, signals, and ngrx basics child routes', () => {
    const shellRoute = STATE_MANAGEMENT_ROUTES[0];
    const childPaths = shellRoute.children?.map((route) => route.path) ?? [];

    expect(childPaths).toContain('service-state');
    expect(childPaths).toContain('signals-state');
    expect(childPaths).toContain('ngrx-basics');
  });
});


import { AUTH_ROUTES } from './auth.routes';

describe('auth routes', () => {
  it('contains login and protected dashboard routes', () => {
    const shellRoute = AUTH_ROUTES[0];
    const childPaths = shellRoute.children?.map((route) => route.path) ?? [];

    expect(childPaths).toContain('login');
    expect(childPaths).toContain('dashboard');
  });

  it('applies guard to dashboard route', () => {
    const shellRoute = AUTH_ROUTES[0];
    const dashboardRoute = shellRoute.children?.find((route) => route.path === 'dashboard');

    expect(dashboardRoute?.canActivate?.length).toBe(1);
  });
});


import { Routes } from '@angular/router';
import { routes } from './app.routes';

describe('app routes', () => {
  it('includes dynamic param route', () => {
    const userDetailRoute = routes.find((route) => route.path === 'users/:id');
    expect(userDetailRoute).toBeDefined();
  });

  it('includes child routes under catalog', () => {
    const catalogRoute = routes.find((route) => route.path === 'catalog');
    expect(catalogRoute?.children?.length).toBe(2);
  });

  it('includes lazy loaded admin route', async () => {
    const adminRoute = routes.find((route) => route.path === 'admin');
    expect(typeof adminRoute?.loadChildren).toBe('function');

    const lazyResult = await adminRoute?.loadChildren?.();
    const lazyRoutes = Array.isArray(lazyResult) ? (lazyResult as Routes) : [];
    expect(Array.isArray(lazyRoutes)).toBe(true);
    expect(lazyRoutes?.some((route) => route.path === 'settings')).toBe(true);
  });

  it('includes lazy loaded forms route', async () => {
    const formsRoute = routes.find((route) => route.path === 'forms');
    expect(typeof formsRoute?.loadChildren).toBe('function');

    const lazyResult = await formsRoute?.loadChildren?.();
    const lazyRoutes = Array.isArray(lazyResult) ? (lazyResult as Routes) : [];

    expect(Array.isArray(lazyRoutes)).toBe(true);
    expect(lazyRoutes.some((route) => route.path === '')).toBe(true);
  });

  it('includes lazy loaded HTTP API route', async () => {
    const httpRoute = routes.find((route) => route.path === 'http-api');
    expect(typeof httpRoute?.loadChildren).toBe('function');

    const lazyResult = await httpRoute?.loadChildren?.();
    const lazyRoutes = Array.isArray(lazyResult) ? (lazyResult as Routes) : [];

    expect(Array.isArray(lazyRoutes)).toBe(true);
    expect(lazyRoutes.some((route) => route.path === '')).toBe(true);
  });

  it('includes lazy loaded signals route', async () => {
    const signalsRoute = routes.find((route) => route.path === 'signals');
    expect(typeof signalsRoute?.loadChildren).toBe('function');

    const lazyResult = await signalsRoute?.loadChildren?.();
    const lazyRoutes = Array.isArray(lazyResult) ? (lazyResult as Routes) : [];

    expect(Array.isArray(lazyRoutes)).toBe(true);
    expect(lazyRoutes.some((route) => route.path === '')).toBe(true);
  });

  it('includes lazy loaded auth route', async () => {
    const authRoute = routes.find((route) => route.path === 'auth');
    expect(typeof authRoute?.loadChildren).toBe('function');

    const lazyResult = await authRoute?.loadChildren?.();
    const lazyRoutes = Array.isArray(lazyResult) ? (lazyResult as Routes) : [];

    expect(Array.isArray(lazyRoutes)).toBe(true);
    expect(lazyRoutes.some((route) => route.path === '')).toBe(true);
  });

  it('includes lazy loaded state-management route', async () => {
    const stateRoute = routes.find((route) => route.path === 'state-management');
    expect(typeof stateRoute?.loadChildren).toBe('function');

    const lazyResult = await stateRoute?.loadChildren?.();
    const lazyRoutes = Array.isArray(lazyResult) ? (lazyResult as Routes) : [];

    expect(Array.isArray(lazyRoutes)).toBe(true);
    expect(lazyRoutes.some((route) => route.path === '')).toBe(true);
  });
});


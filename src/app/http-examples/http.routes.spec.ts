import { Routes } from '@angular/router';
import { HTTP_ROUTES } from './http.routes';

describe('http routes', () => {
  it('contains separate CRUD child routes', () => {
    const shellRoute = HTTP_ROUTES[0];
    const childPaths = shellRoute.children?.map((route) => route.path) ?? [];

    expect(childPaths).toContain('get');
    expect(childPaths).toContain('post');
    expect(childPaths).toContain('put');
    expect(childPaths).toContain('delete');
  });

  it('route tree is defined as Angular Routes', () => {
    const routes = HTTP_ROUTES as Routes;
    expect(Array.isArray(routes)).toBe(true);
  });
});


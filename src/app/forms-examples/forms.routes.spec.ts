import { Routes } from '@angular/router';
import { FORMS_ROUTES } from './forms.routes';

describe('forms routes', () => {
  it('defines template and reactive lazy child routes', () => {
    const shell = FORMS_ROUTES[0];
    const childPaths = shell.children?.map((route) => route.path);

    expect(childPaths).toContain('template');
    expect(childPaths).toContain('reactive-control');
    expect(childPaths).toContain('reactive-group');
  });

  it('loads reactive group routes lazily', async () => {
    const shell = FORMS_ROUTES[0];
    const reactiveGroupRoute = shell.children?.find((route) => route.path === 'reactive-group');

    const lazyResult = await reactiveGroupRoute?.loadChildren?.();
    const lazyRoutes = Array.isArray(lazyResult) ? (lazyResult as Routes) : [];

    expect(Array.isArray(lazyRoutes)).toBe(true);
    expect(lazyRoutes.some((route) => route.path === '')).toBe(true);
  });
});


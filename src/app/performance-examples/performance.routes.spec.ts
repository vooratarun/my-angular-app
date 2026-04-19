import { PERFORMANCE_ROUTES } from './performance.routes';

describe('performance routes', () => {
  it('contains onpush, trackby, and code-splitting routes', () => {
    const shellRoute = PERFORMANCE_ROUTES[0];
    const childPaths = shellRoute.children?.map((route) => route.path) ?? [];

    expect(childPaths).toContain('onpush');
    expect(childPaths).toContain('trackby');
    expect(childPaths).toContain('code-splitting');
  });

  it('uses loadComponent for code splitting route', () => {
    const shellRoute = PERFORMANCE_ROUTES[0];
    const splitRoute = shellRoute.children?.find((route) => route.path === 'code-splitting');

    expect(typeof splitRoute?.loadComponent).toBe('function');
  });
});


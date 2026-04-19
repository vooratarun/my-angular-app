import { DATA_BINDING_ROUTES } from './data-binding.routes';

describe('data binding routes', () => {
  it('contains all-bindings child route', () => {
    const shell = DATA_BINDING_ROUTES[0];
    const childPaths = shell.children?.map((route) => route.path) ?? [];

    expect(childPaths).toContain('all');
  });
});


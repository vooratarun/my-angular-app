import { OnpushDemoComponent } from './onpush-demo.component';

describe('OnpushDemoComponent', () => {
  it('replaces array reference in immutable update', () => {
    const component = new OnpushDemoComponent();
    const before = component.items;

    component.replaceImmutably();

    expect(component.items).not.toBe(before);
  });
});


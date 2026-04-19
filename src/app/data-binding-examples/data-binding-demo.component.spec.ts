import { DataBindingDemoComponent } from './data-binding-demo.component';

describe('DataBindingDemoComponent', () => {
  it('increments click counter', () => {
    const component = new DataBindingDemoComponent();

    component.increment();
    component.increment();

    expect(component.count).toBe(2);
  });

  it('toggles active class state', () => {
    const component = new DataBindingDemoComponent();
    const before = component.isActive;

    component.toggleActive();

    expect(component.isActive).toBe(!before);
  });
});


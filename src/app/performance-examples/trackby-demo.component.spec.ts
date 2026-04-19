import { TrackbyDemoComponent } from './trackby-demo.component';

describe('TrackbyDemoComponent', () => {
  it('trackById returns stable id', () => {
    const component = new TrackbyDemoComponent();

    expect(component.trackById(0, { id: 42, name: 'Item' })).toBe(42);
  });
});


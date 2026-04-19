import { TemplateFormsDemoComponent } from './template-forms-demo.component';

describe('TemplateFormsDemoComponent', () => {
  it('updates submit message for invalid submission', () => {
    const component = new TemplateFormsDemoComponent();

    component.submit({ invalid: true } as never);

    expect(component.submitMessage).toContain('Form is invalid');
  });
});


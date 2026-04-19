import { ReactiveFormControlDemoComponent } from './reactive-form-control-demo.component';

describe('ReactiveFormControlDemoComponent', () => {
  it('marks control as invalid for forbidden domain', () => {
    const component = new ReactiveFormControlDemoComponent();

    component.emailControl.setValue('user@spam.com');

    expect(component.emailControl.hasError('forbiddenDomain')).toBe(true);
  });

  it('accepts a valid email', () => {
    const component = new ReactiveFormControlDemoComponent();

    component.emailControl.setValue('user@company.com');
    component.submitControl();

    expect(component.submitMessage).toContain('Email accepted');
  });
});


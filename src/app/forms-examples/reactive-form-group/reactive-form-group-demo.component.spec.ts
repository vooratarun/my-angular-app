import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormGroupDemoComponent } from './reactive-form-group-demo.component';

describe('ReactiveFormGroupDemoComponent', () => {
  let fixture: ComponentFixture<ReactiveFormGroupDemoComponent>;
  let component: ReactiveFormGroupDemoComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormGroupDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormGroupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('applies password mismatch custom validator', () => {
    component.profileForm.setValue({
      fullName: 'Tarv User',
      email: 'tarv@company.com',
      jobTitle: 'Engineer',
      phone: '9876543210',
      experienceYears: 5,
      password: 'abc12345',
      confirmPassword: 'abc12346',
    });

    expect(component.profileForm.hasError('passwordMismatch')).toBe(true);
  });

  it('submits valid form successfully', () => {

    component.profileForm.setValue({
      fullName: 'Tarv User',
      email: 'tarv@company.com',
      jobTitle: 'Engineer',
      phone: '9876543210',
      experienceYears: 5,
      password: 'abc12345',
      confirmPassword: 'abc12345',
    });
    component.submitGroup();

    expect(component.submitMessage).toContain('Submitted profile');
  });

  it('applies phone pattern validator', () => {
    component.profileForm.setValue({
      fullName: 'Tarv User',
      email: 'tarv@company.com',
      jobTitle: 'Engineer',
      phone: '12345',
      experienceYears: 5,
      password: 'abc12345',
      confirmPassword: 'abc12345',
    });

    expect(component.profileForm.controls.phone.hasError('pattern')).toBe(true);
  });
});


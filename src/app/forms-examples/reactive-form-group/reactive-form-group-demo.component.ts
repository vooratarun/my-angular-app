import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenDomainValidator, passwordMatchValidator } from '../validators/custom-validators';

@Component({
  selector: 'app-reactive-form-group-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-group-demo.component.html',
  styleUrl: './reactive-form-group-demo.component.scss',
})
export class ReactiveFormGroupDemoComponent {
  private readonly fb = inject(FormBuilder);

  profileForm = this.fb.nonNullable.group(
    {
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, forbiddenDomainValidator('blocked.com')]],
      jobTitle: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      experienceYears: [0, [Validators.required, Validators.min(0), Validators.max(40)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: [passwordMatchValidator] },
  );

  submitMessage = 'Form is not submitted yet.';

  submitGroup(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.submitMessage = 'Reactive FormGroup is invalid.';
      return;
    }

    const { fullName, email, jobTitle } = this.profileForm.getRawValue();
    this.submitMessage = `Submitted profile: ${fullName} (${email}) - ${jobTitle}`;
  }
}


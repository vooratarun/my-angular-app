import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenDomainValidator } from '../validators/custom-validators';

@Component({
  selector: 'app-reactive-form-control-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-control-demo.component.html',
  styleUrl: './reactive-form-control-demo.component.scss',
})
export class ReactiveFormControlDemoComponent {
  emailControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email, forbiddenDomainValidator('spam.com')],
  });

  submitMessage = 'Waiting for input.';

  submitControl(): void {
    if (this.emailControl.invalid) {
      this.emailControl.markAsTouched();
      this.submitMessage = 'Email control is invalid.';
      return;
    }

    this.submitMessage = `Email accepted: ${this.emailControl.value}`;
  }
}


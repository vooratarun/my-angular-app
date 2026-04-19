import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-forms-demo.component.html',
  styleUrl: './template-forms-demo.component.scss',
})
export class TemplateFormsDemoComponent {
  model = {
    fullName: '',
    email: '',
    topic: 'Template Forms',
  };

  submitMessage = 'Not submitted yet.';

  submit(form: NgForm): void {
    if (form.invalid) {
      this.submitMessage = 'Form is invalid. Fix validation errors before submitting.';
      return;
    }

    this.submitMessage = `Submitted: ${this.model.fullName} | ${this.model.email} | ${this.model.topic}`;
  }
}


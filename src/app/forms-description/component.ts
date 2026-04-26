// title-description.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-title-description',
  templateUrl: './description.html',
  styleUrl: './component.css',
  imports: [ReactiveFormsModule],
})
export class TitleDescriptionComponent {
  listingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.listingForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
}

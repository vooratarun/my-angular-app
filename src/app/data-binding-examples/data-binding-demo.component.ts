import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.scss',
})
export class DataBindingDemoComponent {
  title = 'Angular Data Binding';
  username = 'Tarv';
  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
  isDisabled = false;
  inputPlaceholder = 'Type your name';
  count = 0;
  isActive = true;
  progress = 60;
  ariaLabel = 'profile image';

  increment(): void {
    this.count += 1;
  }

  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}


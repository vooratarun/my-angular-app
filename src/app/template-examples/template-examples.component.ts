import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-examples',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-examples.component.html',
  styleUrl: './template-examples.component.scss',
})
export class TemplateExamplesComponent {
  appName = 'Angular Templates + Directives Demo';
  username = 'Tarv';
  profileImageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';

  isLoggedIn = false;
  statusMessage = 'Waiting for action...';

  newProduct = '';
  products: string[] = ['Keyboard', 'Mouse', 'Monitor'];

  isHighlighted = true;
  rating = 4;
  textColor = '#2563eb';

  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
    this.statusMessage = this.isLoggedIn ? 'User is logged in.' : 'User is logged out.';
  }

  addProduct(): void {
    const trimmed = this.newProduct.trim();
    if (!trimmed) {
      return;
    }

    this.products.push(trimmed);
    this.newProduct = '';
    this.statusMessage = `Added: ${trimmed}`;
  }

  removeProduct(index: number): void {
    const [removed] = this.products.splice(index, 1);
    if (removed) {
      this.statusMessage = `Removed: ${removed}`;
    }
  }

  toggleHighlight(): void {
    this.isHighlighted = !this.isHighlighted;
  }
}


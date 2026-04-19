import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngpractice',
  imports: [FormsModule, CommonModule],
  templateUrl: './ngpractice.html',
  styleUrl: './ngpractice.scss',
})
export class Ngpractice {
  username = '';

  showMessage = true;

  fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  isActive = false;

  rating = 3;
}

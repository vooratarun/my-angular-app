import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="panel">
      <h3>signal()</h3>
      <p>signal() creates reactive writable state.</p>

      <p>Counter value: <strong>{{ counter() }}</strong></p>

      <button type="button" (click)="decrement()">-</button>
      <button type="button" (click)="increment()">+</button>
      <button type="button" (click)="reset()">Reset</button>
    </section>
  `,
  styles: [
    `
      .panel { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; }
      button { margin-right: 0.5rem; }
    `,
  ],
})
export class SignalDemoComponent {
  counter = signal(0);

  increment(): void {
    this.counter.update((value) => value + 1);
  }

  decrement(): void {
    this.counter.update((value) => value - 1);
  }

  reset(): void {
    this.counter.set(0);
  }
}


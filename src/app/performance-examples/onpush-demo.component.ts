import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OnpushChildComponent } from './onpush-child.component';

interface CartPreview {
  id: number;
  name: string;
}

@Component({
  selector: 'app-onpush-demo',
  standalone: true,
  imports: [CommonModule, OnpushChildComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="panel">
      <h3>OnPush Example</h3>
      <p>
        Mutating the same array reference often does not trigger OnPush child updates.
        Replacing with a new array reference does.
      </p>

      <button type="button" (click)="mutateInPlace()">Mutate In Place</button>
      <button type="button" (click)="replaceImmutably()">Replace Immutably</button>

      <app-onpush-child [items]="items" [message]="message"></app-onpush-child>
    </section>
  `,
  styles: [
    `
      .panel { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; }
      button { margin-right: 0.5rem; }
    `,
  ],
})
export class OnpushDemoComponent {
  items: CartPreview[] = [
    { id: 1, name: 'Keyboard' },
    { id: 2, name: 'Mouse' },
  ];

  message = 'Initial state';

  mutateInPlace(): void {
    this.items[0].name = `Keyboard ${Date.now()}`;
    this.message = 'Mutated same array reference';
  }

  replaceImmutably(): void {
    this.items = this.items.map((item, index) =>
      index === 0 ? { ...item, name: `Keyboard ${Date.now()}` } : item,
    );
    this.message = 'Replaced array with new reference';
  }
}


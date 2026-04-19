import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-trackby-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="panel">
      <h3>trackBy Example</h3>
      <p>
        <code>trackBy</code> helps Angular reuse DOM nodes when list references change but item IDs stay the same.
      </p>

      <button type="button" (click)="shuffle()">Shuffle List</button>
      <button type="button" (click)="renameFirst()">Rename First Item</button>

      <ul>
        <li *ngFor="let item of items; trackBy: trackById">
          #{{ item.id }} - {{ item.name }}
        </li>
      </ul>
    </section>
  `,
  styles: [
    `
      .panel { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; }
      button { margin-right: 0.5rem; }
    `,
  ],
})
export class TrackbyDemoComponent {
  items: Item[] = [
    { id: 1, name: 'Keyboard' },
    { id: 2, name: 'Mouse' },
    { id: 3, name: 'Monitor' },
    { id: 4, name: 'Headset' },
  ];

  trackById(_: number, item: Item): number {
    return item.id;
  }

  shuffle(): void {
    this.items = [...this.items].sort(() => Math.random() - 0.5);
  }

  renameFirst(): void {
    const first = this.items[0];
    if (!first) {
      return;
    }

    this.items = [
      { ...first, name: `${first.name}*` },
      ...this.items.slice(1),
    ];
  }
}


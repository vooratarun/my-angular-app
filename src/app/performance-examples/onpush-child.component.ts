import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';

interface CartPreview {
  id: number;
  name: string;
}

@Component({
  selector: 'app-onpush-child',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="box">
      <p><strong>OnPush Child Checks:</strong> {{ checks }}</p>
      <p><strong>First item:</strong> {{ items[0]?.name }}</p>
      <p><strong>Message:</strong> {{ message }}</p>
    </div>
  `,
  styles: [
    `
      .box { border: 1px dashed #94a3b8; padding: 0.75rem; border-radius: 0.5rem; }
    `,
  ],
})
export class OnpushChildComponent implements DoCheck {
  @Input({ required: true }) items: CartPreview[] = [];
  @Input({ required: true }) message = '';

  checks = 0;

  ngDoCheck(): void {
    this.checks += 1;
  }
}


import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DI_LABEL } from '../services/di-label.token';
import { ScopedCounterService } from '../services/scoped-counter.service';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-di-default-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './di-default-child.component.html',
  styleUrl: './di-child.component.scss',
})
export class DiDefaultChildComponent {
  readonly providerLabel = inject(DI_LABEL);

  private readonly selectionService = inject(SelectionService);
  private readonly scopedCounter = inject(ScopedCounterService);

  readonly singletonId = this.selectionService.instanceId;
  readonly scopedId = this.scopedCounter.instanceId;

  get sharedMessage(): string {
    return this.selectionService.selectedItem();
  }

  get scopedCount(): number {
    return this.scopedCounter.count;
  }

  incrementScopedCounter(): void {
    this.scopedCounter.increment();
  }

  sendMessage(): void {
    this.selectionService.setSelectedItem('Updated by default child');
  }
}


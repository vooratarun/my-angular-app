import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCatalogService } from '../services/course-catalog.service';
import { DI_LABEL } from '../services/di-label.token';
import { ScopedCounterService } from '../services/scoped-counter.service';
import { SelectionService } from '../services/selection.service';
import { DiDefaultChildComponent } from './di-default-child.component';
import { DiOverrideChildComponent } from './di-override-child.component';

@Component({
  selector: 'app-di-examples',
  standalone: true,
  imports: [CommonModule, FormsModule, DiDefaultChildComponent, DiOverrideChildComponent],
  providers: [
    ScopedCounterService,
    { provide: DI_LABEL, useValue: 'Parent provider' },
  ],
  templateUrl: './di-examples.component.html',
  styleUrl: './di-examples.component.scss',
})
export class DiExamplesComponent {
  readonly providerLabel = inject(DI_LABEL);

  private readonly courseCatalogService = inject(CourseCatalogService);
  private readonly selectionService = inject(SelectionService);
  private readonly scopedCounter = inject(ScopedCounterService);

  readonly singletonId = this.selectionService.instanceId;
  readonly scopedId = this.scopedCounter.instanceId;
  readonly topics = this.courseCatalogService.topics;

  sharedMessageInput = 'Set by parent';

  get sharedMessage(): string {
    return this.selectionService.selectedItem();
  }

  get scopedCount(): number {
    return this.scopedCounter.count;
  }

  setSharedMessage(): void {
    const message = this.sharedMessageInput.trim();
    this.selectionService.setSelectedItem(message || 'Empty message');
  }

  incrementScopedCounter(): void {
    this.scopedCounter.increment();
  }
}


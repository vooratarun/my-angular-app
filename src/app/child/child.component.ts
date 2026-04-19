import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  private readonly selectionService = inject(SelectionService);

  title = input('');
  items = input<string[]>([]);

  selectItem(item: string): void {
    this.selectionService.setSelectedItem(item);
  }
}

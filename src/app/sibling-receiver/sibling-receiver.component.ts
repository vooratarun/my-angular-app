import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-sibling-receiver',
  standalone: true,
  templateUrl: './sibling-receiver.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiblingReceiverComponent {
  private readonly selectionService = inject(SelectionService);

  selectedItem = this.selectionService.selectedItem;
}

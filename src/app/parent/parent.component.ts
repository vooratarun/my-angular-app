import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SiblingReceiverComponent } from '../sibling-receiver/sibling-receiver.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent, SiblingReceiverComponent],
  templateUrl: './parent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  parentTitle = 'Sender Sibling';
  products = ['Keyboard', 'Mouse', 'Monitor'];
}

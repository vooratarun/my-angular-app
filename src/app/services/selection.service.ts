import { Injectable, signal } from '@angular/core';

let nextSelectionServiceId = 1;

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  readonly instanceId = `selection-${nextSelectionServiceId++}`;
  selectedItem = signal('None');

  setSelectedItem(item: string): void {
    this.selectedItem.set(item);
  }
}


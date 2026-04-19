import { Injectable } from '@angular/core';

let nextScopedCounterId = 1;

@Injectable()
export class ScopedCounterService {
  readonly instanceId = `scoped-${nextScopedCounterId++}`;
  count = 0;

  increment(): void {
    this.count += 1;
  }
}


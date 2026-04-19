import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseCatalogService {
  readonly topics = [
    'Services',
    'Singleton services',
    'inject()',
    'providers',
    'DI hierarchy',
  ];
}


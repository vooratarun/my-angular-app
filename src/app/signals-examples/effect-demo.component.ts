import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="panel">
      <h3>effect()</h3>
      <p>effect() runs side effects whenever tracked signals change.</p>

      <p>Theme mode: <strong>{{ theme() }}</strong></p>
      <button type="button" (click)="toggleTheme()">Toggle Theme</button>

      <h4>Effect log</h4>
      <ul>
        <li *ngFor="let item of activityLog">{{ item }}</li>
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
export class EffectDemoComponent {
  theme = signal<'light' | 'dark'>('light');
  activityLog: string[] = [];

  private readonly trackThemeEffect = effect(() => {
    this.activityLog = [`Theme changed to ${this.theme()}`, ...this.activityLog].slice(0, 5);
  });

  toggleTheme(): void {
    this.theme.update((mode) => (mode === 'light' ? 'dark' : 'light'));
  }
}


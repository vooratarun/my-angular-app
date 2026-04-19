import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <section>
      <h2>Dynamic Params</h2>
      <p>Open a profile using route parameter <code>:id</code>.</p>

      <ul>
        <li *ngFor="let id of userIds">
          <a [routerLink]="['/users', id]">User {{ id }}</a>
        </li>
      </ul>

      <div>
        <input [(ngModel)]="customUserId" placeholder="Enter user id" />
        <button type="button" (click)="openUser()">Open User</button>
      </div>
    </section>
  `,
})
export class UsersComponent {
  userIds = [101, 202, 303];
  customUserId = '404';

  constructor(private readonly router: Router) {}

  openUser(): void {
    const id = this.customUserId.trim() || 'unknown';
    this.router.navigate(['/users', id]);
  }
}


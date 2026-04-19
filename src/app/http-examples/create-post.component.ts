import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonplaceholderApiService } from './services/jsonplaceholder-api.service';
import { Post } from './models/post.model';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section>
      <h3>POST /posts</h3>
      <p>Creates a new post with HttpClient POST.</p>

      <label>User ID <input type="number" [(ngModel)]="payload.userId" /></label>
      <label>Title <input [(ngModel)]="payload.title" /></label>
      <label>Body <textarea [(ngModel)]="payload.body"></textarea></label>

      <button type="button" (click)="createPost()">Create Post</button>

      <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>
      <pre *ngIf="createdPost">{{ createdPost | json }}</pre>
    </section>
  `,
  styles: [
    `
      label {
        display: grid;
        gap: 0.35rem;
        margin-bottom: 0.5rem;
        max-width: 420px;
      }
      .error {
        color: #b91c1c;
      }
    `,
  ],
})
export class CreatePostComponent {
  private readonly api = inject(JsonplaceholderApiService);

  payload: Omit<Post, 'id'> = {
    userId: 1,
    title: 'Learning Angular HttpClient',
    body: 'POST example body',
  };

  createdPost: Post | null = null;
  errorMessage = '';

  createPost(): void {
    this.errorMessage = '';
    this.createdPost = null;

    this.api.createPost(this.payload).subscribe({
      next: (post) => {
        this.createdPost = post;
      },
      error: (error: unknown) => {
        this.errorMessage = error instanceof Error ? error.message : 'Failed to create post.';
      },
    });
  }
}


import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonplaceholderApiService } from './services/jsonplaceholder-api.service';
import { Post } from './models/post.model';

@Component({
  selector: 'app-update-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section>
      <h3>PUT /posts/:id</h3>
      <p>Updates an existing post with HttpClient PUT.</p>

      <label>Post ID <input type="number" [(ngModel)]="postId" /></label>
      <label>User ID <input type="number" [(ngModel)]="payload.userId" /></label>
      <label>Title <input [(ngModel)]="payload.title" /></label>
      <label>Body <textarea [(ngModel)]="payload.body"></textarea></label>

      <button type="button" (click)="updatePost()">Update Post</button>

      <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>
      <pre *ngIf="updatedPost">{{ updatedPost | json }}</pre>
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
export class UpdatePostComponent {
  private readonly api = inject(JsonplaceholderApiService);

  postId = 1;
  payload: Omit<Post, 'id'> = {
    userId: 1,
    title: 'Updated with Angular PUT',
    body: 'PUT example body',
  };

  updatedPost: Post | null = null;
  errorMessage = '';

  updatePost(): void {
    this.errorMessage = '';
    this.updatedPost = null;

    this.api.updatePost(this.postId, this.payload).subscribe({
      next: (post) => {
        this.updatedPost = post;
      },
      error: (error: unknown) => {
        this.errorMessage = error instanceof Error ? error.message : 'Failed to update post.';
      },
    });
  }
}


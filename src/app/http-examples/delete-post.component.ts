import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonplaceholderApiService } from './services/jsonplaceholder-api.service';

@Component({
  selector: 'app-delete-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section>
      <h3>DELETE /posts/:id</h3>
      <p>Deletes a post with HttpClient DELETE.</p>

      <label>Post ID <input type="number" [(ngModel)]="postId" /></label>

      <button type="button" (click)="deletePost()">Delete Post</button>

      <p *ngIf="resultMessage">{{ resultMessage }}</p>
      <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>
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
export class DeletePostComponent {
  private readonly api = inject(JsonplaceholderApiService);

  postId = 1;
  resultMessage = '';
  errorMessage = '';

  deletePost(): void {
    this.resultMessage = '';
    this.errorMessage = '';

    this.api.deletePost(this.postId).subscribe({
      next: () => {
        this.resultMessage = `Post ${this.postId} deleted successfully.`;
      },
      error: (error: unknown) => {
        this.errorMessage = error instanceof Error ? error.message : 'Failed to delete post.';
      },
    });
  }
}


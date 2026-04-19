import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { JsonplaceholderApiService } from './services/jsonplaceholder-api.service';
import { Post } from './models/post.model';

@Component({
  selector: 'app-get-posts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h3>GET /posts</h3>
      <p>Fetches posts with HttpClient GET.</p>

      <button type="button" (click)="loadPosts()">Reload Posts</button>
      <p *ngIf="loading">Loading posts...</p>
      <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>

      <ul>
        <li *ngFor="let post of posts">
          <strong>#{{ post.id }} - {{ post.title }}</strong>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </section>
  `,
  styles: [
    `
      .error {
        color: #b91c1c;
      }
    `,
  ],
})
export class GetPostsComponent implements OnInit {
  private readonly api = inject(JsonplaceholderApiService);

  posts: Post[] = [];
  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.loading = true;
    this.errorMessage = '';

    this.api.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.loading = false;
      },
      error: (error: unknown) => {
        this.errorMessage = error instanceof Error ? error.message : 'Failed to load posts.';
        this.loading = false;
      },
    });
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(limit = 10): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}?_limit=${limit}`);
  }

  createPost(post: Omit<Post, 'id'>): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }

  updatePost(id: number, post: Omit<Post, 'id'>): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<unknown>(`${this.baseUrl}/${id}`).pipe(map(() => void 0));
  }
}


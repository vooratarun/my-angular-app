import { Injectable, computed, inject, signal } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenStorage = inject(TokenStorageService);

  private readonly token = signal<string | null>(this.tokenStorage.getToken());

  readonly username = computed(() => this.tokenStorage.getUsernameFromToken(this.token()));
  readonly isAuthenticated = computed(() => this.tokenStorage.hasValidToken());


  login(username: string, password: string): boolean {
    const trimmedUser = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUser || !trimmedPassword) {
      return false;
    }

    const fakeJwt = this.createFakeJwt(trimmedUser);
    this.tokenStorage.saveToken(fakeJwt);
    this.token.set(fakeJwt);
    return true;
  }

  logout(): void {
    this.tokenStorage.clearToken();
    this.token.set(null);
  }

  getToken(): string | null {
    return this.token();
  }

  private createFakeJwt(username: string): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(
      JSON.stringify({
        sub: username,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      }),
    );
    const signature = 'demo-signature';

    return `${header}.${payload}.${signature}`;
  }
}


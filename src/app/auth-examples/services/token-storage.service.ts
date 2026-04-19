import { Injectable } from '@angular/core';

interface JwtPayload {
  sub?: string;
  exp?: number;
}

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private readonly storageKey = 'learning.jwt.token';

  saveToken(token: string): void {
    localStorage.setItem(this.storageKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.storageKey);
  }

  hasValidToken(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = this.parsePayload(token);
    if (!payload?.exp) {
      return false;
    }

    return payload.exp > Math.floor(Date.now() / 1000);
  }

  getUsernameFromToken(token: string | null): string | null {
    const payload = this.parsePayload(token);
    return payload?.sub ?? null;
  }

  private parsePayload(token: string | null): JwtPayload | null {
    if (!token) {
      return null;
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }

    try {
      const decoded = atob(parts[1]);
      return JSON.parse(decoded) as JwtPayload;
    } catch {
      return null;
    }
  }
}


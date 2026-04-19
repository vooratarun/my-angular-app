import { TestBed } from '@angular/core/testing';
import { Router, UrlTree, provideRouter } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

describe('authGuard', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [provideRouter([]), AuthService, TokenStorageService],
    });
  });

  it('redirects to login when unauthenticated', () => {
    const result = TestBed.runInInjectionContext(() => authGuard({} as never, {} as never));

    expect(result instanceof UrlTree).toBe(true);
    if (result instanceof UrlTree) {
      const router = TestBed.inject(Router);
      expect(router.serializeUrl(result)).toBe('/auth/login');
    }
  });

  it('allows access when authenticated', () => {
    const authService = TestBed.inject(AuthService);
    authService.login('demo.user', 'password');

    const result = TestBed.runInInjectionContext(() => authGuard({} as never, {} as never));
    expect(result).toBe(true);
  });
});


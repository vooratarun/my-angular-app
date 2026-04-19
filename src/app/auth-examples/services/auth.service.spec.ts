import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

describe('AuthService', () => {
  let service: AuthService;
  let tokenStorage: TokenStorageService;

  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({
      providers: [AuthService, TokenStorageService],
    });

    service = TestBed.inject(AuthService);
    tokenStorage = TestBed.inject(TokenStorageService);
  });

  it('stores token on successful login', () => {
    const success = service.login('demo.user', 'password');

    expect(success).toBe(true);
    expect(tokenStorage.getToken()).not.toBeNull();
    expect(service.isAuthenticated()).toBe(true);
  });

  it('clears token on logout', () => {
    service.login('demo.user', 'password');
    service.logout();

    expect(tokenStorage.getToken()).toBeNull();
    expect(service.isAuthenticated()).toBe(false);
  });
});


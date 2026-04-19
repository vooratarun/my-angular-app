import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { httpLoggingInterceptor } from './http-logging.interceptor';

describe('httpLoggingInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([httpLoggingInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('adds demo header and maps errors', () => {
    let actualError: unknown;

    http.get('/interceptor-test').subscribe({
      error: (error) => {
        actualError = error;
      },
    });

    const request = httpMock.expectOne('/interceptor-test');
    expect(request.request.headers.get('X-Demo-Client')).toBe('angular-http-learning');
    request.flush({ message: 'boom' }, { status: 500, statusText: 'Server Error' });

    expect(actualError instanceof Error).toBe(true);
  });
});


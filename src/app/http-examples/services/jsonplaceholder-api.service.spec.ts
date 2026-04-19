import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { JsonplaceholderApiService } from './jsonplaceholder-api.service';

describe('JsonplaceholderApiService', () => {
  let service: JsonplaceholderApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(JsonplaceholderApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('calls GET posts endpoint', () => {
    service.getPosts(2).subscribe((posts) => {
      expect(posts.length).toBe(2);
    });

    const request = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts?_limit=2');
    expect(request.request.method).toBe('GET');
    request.flush([
      { id: 1, userId: 1, title: 'A', body: 'B' },
      { id: 2, userId: 1, title: 'C', body: 'D' },
    ]);
  });
});


import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const httpLoggingInterceptor: HttpInterceptorFn = (req, next) => {
  const startedAt = Date.now();
  const tracedRequest = req.clone({
    setHeaders: {
      'X-Demo-Client': 'angular-http-learning',
    },
  });

  return next(tracedRequest).pipe(
    tap(() => {
      const duration = Date.now() - startedAt;
      console.log(`[HTTP] ${tracedRequest.method} ${tracedRequest.urlWithParams} (${duration}ms)`);
    }),
    catchError((error: HttpErrorResponse) => {
      const message = `${error.status || 0} ${error.statusText || 'HTTP Error'} on ${tracedRequest.method} ${tracedRequest.urlWithParams}`;
      console.error('[HTTP ERROR]', message);
      return throwError(() => new Error(message));
    }),
  );
};


import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authTokenInterceptor } from './auth-examples/interceptors/auth-token.interceptor';
import { httpLoggingInterceptor } from './http-examples/interceptors/http-logging.interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authTokenInterceptor, httpLoggingInterceptor])),
  ],
};

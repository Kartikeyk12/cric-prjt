import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { myHttpInterceptor, } from './interceptors/http.interceptor';
import { provideStore, StoreModule } from '@ngrx/store';
import { studentReducer } from './components/ngrx-store/student.reducer';
import { provideEffects } from '@ngrx/effects';
import { StudentEffects } from './components/ngrx-store/student.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideStore({ students: studentReducer }),
  provideEffects([StudentEffects]),
  provideClientHydration(),
  provideHttpClient(withFetch(), withInterceptors([myHttpInterceptor])),
  ]
};

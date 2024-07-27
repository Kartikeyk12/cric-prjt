import { HttpEvent, HttpInterceptorFn, HttpHandlerFn, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const myHttpInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const slug = 'my-custom-slug';
  const newRequest = req.clone({
    headers: req.headers.set('X-Slug', slug) // ** I HAVE NOT USED SLUG LIKE THIS APPROACH SO IT IS SETTING IT BUT I HAVE USED SLUG IN ID URLS*
  });
  // console.log(newRequest)
  return next(newRequest).pipe(
    // Handling Error here and chaging it as per requirement
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred!';
      
      if (error.error || error.error instanceof ErrorEvent) {
        errorMessage = `old error ${error.error.message}`;
      } else {
        errorMessage = `new error${error.status} - ${error.message}`;
      }
      console.error(errorMessage);
      return throwError(() => new Error(errorMessage));
    })
  );
};

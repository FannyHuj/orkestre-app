import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

export function AuthenticationInterceptorService (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const auth = inject(AuthenticationService); // Injection of the AuthenticationService
  const token = auth.getToken(); // Get the token from the AuthenticationService

  if (!token) { 
    return next(req)
  }

  const headers = new HttpHeaders({
    "Authorization": 'Bearer '+token
  })

  const newReq = req.clone({
    headers
  })

  return next(newReq)
}

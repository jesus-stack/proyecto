import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserInterceptorService implements HttpInterceptor{

  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let authReq = req;
    const token = this.token.getToken();
    
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set('x-access-token', token),
      });
    }
    return next.handle(authReq);
  }
}

export const UserInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: UserInterceptorService, multi: true },
];

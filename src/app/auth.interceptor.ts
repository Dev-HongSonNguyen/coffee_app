import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SESSION_STORAGE } from 'ngx-webstorage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const token = JSON.parse(sessionStorage.getItem('user') || '{}').accessToken
    // if(!token) return next.handle(request);
    // const modifyRequest = request.clone({
    //   setHeaders: {
    //     "Auth": `Bearer ${token}`
    //   }
    // })
    return next.handle(request);
  }
}

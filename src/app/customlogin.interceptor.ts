import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomloginInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('https://jsonplaceholder.typicode.com')) {
      request = request.clone({
        setHeaders: {
          'Xcustom-header1': 'testheader1',
          'Xcustom-header2': 'testheader2',
        },
      });
    }
    request = request.clone({ setParams: { name: 'angular' } });
    // console.log(request.url);

    return next.handle(request);
  }
}

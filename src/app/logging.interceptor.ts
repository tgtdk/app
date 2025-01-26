import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class MockApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Mock response for the specific API endpoint
    if (req.url === '/your-api-endpoint' && req.method === 'POST') {
      const { visitTime, reportId } = req.body;

      // Mock response logic
      const response = Math.random() > 0.5; // Random true/false for testing

      return of(new HttpResponse({ status: 200, body: response })).pipe(delay(500)); // Simulate network delay
    }

    // For other requests, pass through
    return next.handle(req);
  }
}

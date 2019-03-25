import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('token') != null){
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer' + localStorage.getItem('token'))
      });      
      return next.handle(clonedReq)
      .pipe(
        tap(
          secc => { },       
          error => {
          if (error.status === 401) {
            this.router.navigateByUrl('/login');
          }
        if (error.status === 403) {
          this.router.navigateByUrl('/forbidden');
        }
          return throwError(error);
        }
      )
      )
  }
  else
    return next.handle(req.clone());
}
}

import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let theErrMessage = "";
        if (error.status == 409) {
          theErrMessage = "unexpected error with 409 armaxsovs ra errori iyo";
        }
        if (error.error instanceof ErrorEvent) {
          // client-side error
          theErrMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          theErrMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(theErrMessage);
      })
    );
  }
}

import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from 'rxjs';


export class customHeaderInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const headerReq = request.clone({
      headers: request.headers.set('Content-Type', 'application/json')
      .set("Accept", "application/json")
      .set("Access-Control-Allow-Origin", "*")
      .set("Access-Control-Allow-Headers", "Content-Type")
      .set("Access-Control-Allow-Credentials", "true")
      .set("Access-Control-Allow-Methods", "GET")
      .set("Access-Control-Allow-Methods", "HEAD")
      .set("Access-Control-Allow-Methods", "OPTIONS")
      .set("Access-Control-Allow-Headers", "session-variable")
      .set("Access-Control-Allow-Headers", "Origin")
      .set("Access-Control-Allow-Headers", "X-Requested-With")
      .set("Access-Control-Allow-Headers", "Access-Control-Request-Method")
      .set("Access-Control-Allow-Headers", "Access-Control-Request-Headers")
      .set("Access-Control-Allow-Headers", "Accept")
      .set("Access-Control-Allow-Headers", "Special-Request-Header")
    
      
    });

    return next.handle(headerReq);
  }
}

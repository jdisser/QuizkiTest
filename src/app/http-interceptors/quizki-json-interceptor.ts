import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class QuizkiJsonInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //test the injector to see if this header is added
    //const modReq = req.clone({setHeaders: {'Custom-Header': 'test'}});
    //the header was added but rejected by the cors preflight, look like it's working
    //made a do nothing interceptor to confirm
    return next.handle(req);
  }
}

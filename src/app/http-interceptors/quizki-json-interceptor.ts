import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class QuizkiJsonInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //console.log("In Interceptor with request to: " + req.url)
    const modReq: HttpRequest<any> = req;

    //set content type for specific URL's

    if(req.url == "http://localhost:8080/index.jsp"){
      const modReq = req.clone({setHeaders: {'Content-Type': 'text/HTML'}});
    } else {
      const modReq = req.clone({setHeaders: {'Content-Type': 'application/x-www-form-urlencoded'}});
    }


    return next.handle(modReq);
  }
}

import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";
//this interceptor is responsible for logging.
export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log("OutGoing Request")
        console.log(req.url);
        console.log(req.headers);
    return next.handle(req).pipe(tap(event=>{
        if(event.type === HttpEventType.Response){
            console.log('Incoming Request')
            console.log(event.body);
        }
    }));
    }
}
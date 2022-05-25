import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
//Creating Interceptor without using cli
//This AuthInterceptor is used for auth headers.
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const newRequest = req.clone({
            headers: req.headers.append("Auth", "newHeader(xyz)")
        });
        return next.handle(newRequest);
    }
}
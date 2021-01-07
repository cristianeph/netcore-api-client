import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OauthBridgeService} from './oauth-bridge.service';
import {IOauthToken} from '../interfaces/oauth-interface';

@Injectable({
  providedIn: 'root'
})
export class ClientInterceptorService implements HttpInterceptor {

  constructor(private oauth: OauthBridgeService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('authentication') === -1) {
      const user: IOauthToken = this.oauth.getToken();
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${user.token}`)
      });
      return next.handle(req);
    } else {
      return next.handle(req);
    }
  }

}

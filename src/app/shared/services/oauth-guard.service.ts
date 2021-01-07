import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {OauthBridgeService} from './oauth-bridge.service';

@Injectable({
  providedIn: 'root'
})
export class OauthGuardService implements CanActivate {

  constructor(private router: Router,
              private oauth: OauthBridgeService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const evaluate = this.oauth.isAuthenticated();
    if (evaluate === true) {
      return true;
    } else {
      this.router.navigate(['/security/login']);
      return false;
    }
  }
}

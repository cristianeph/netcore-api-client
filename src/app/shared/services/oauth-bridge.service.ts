import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IOauthLogin, IOauthToken, IUsuario} from '../interfaces/oauth-interface';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {MessageProviderService} from './message-provider.service';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OauthBridgeService {
  loadingLoginStatus: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient,
              private router: Router,
              private userService: UserService,
              private messageProvider: MessageProviderService) {
  }

  obtainToken(loginData: IOauthLogin): any {
    this.loadingLoginStatus.next(true);
    this.http.post(`${environment.oauthserver}/api/authentication`, loginData).subscribe(
        data => this.saveToken(data),
        error => this.errorToken(error));
  }

  logout(stay?: boolean): void {
    if (stay) {
      localStorage.removeItem('token');
    } else {
      localStorage.removeItem('token');
      this.router.navigate(['/security/login']);
    }
  }

  async saveToken(token): Promise<void> {
    this.loadingLoginStatus.next(true);
    localStorage.setItem('token', JSON.stringify(token));
    await this.userService.getLogged();
  }

  errorToken(error): void {
    this.loadingLoginStatus.next(false);
    this.messageProvider.showSnack('Error, verifique su acceso e intente nuevamente');
    this.router.navigate(['/security/login']);
  }

  isAuthenticated(): boolean {
    const evaluate = localStorage.getItem('token');
    return (evaluate !== undefined && evaluate !== null);
  }

  getToken(): IOauthToken {
    if (localStorage.getItem('token')) {
      return JSON.parse(localStorage.getItem('token'));
    }
    return null;
  }

}

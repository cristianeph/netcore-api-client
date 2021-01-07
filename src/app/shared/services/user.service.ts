import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IOauthTokenAuthorities, IOauthTokenUser} from '../interfaces/oauth-interface';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getLogged(): any {
    /*this.http.get<IOauthTokenUser>(`${environment.apiserver}/username`).subscribe(value => {
      this.saveUser(value);*/
    this.router.navigate(['/clients/list']);
    /*});*/
  }

  saveUser(user): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): IOauthTokenUser {
    const authenticated: IOauthTokenUser = JSON.parse(localStorage.getItem('user'));
    if (authenticated) {
      return authenticated;
    }
    return null;
  }

  getRole(): IOauthTokenAuthorities[] {
    const authenticated: IOauthTokenUser = JSON.parse(localStorage.getItem('user'));
    if (authenticated) {
      return authenticated.authorities;
    }
    return [];
  }

  getUserBasic(): any {
    const authenticated: IOauthTokenUser = JSON.parse(localStorage.getItem('user'));
    if (authenticated) {
      return {
        id: authenticated.principal.id,
        nombres: authenticated.principal.username
      };
    }
    return null;
  }

  isUserOperator(): boolean {
    const authenticated: IOauthTokenUser = JSON.parse(localStorage.getItem('user'));
    if (authenticated.authorities.find(item => item.authority === 'Comprador') !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  isUserSupervisor(): boolean {
    const authenticated: IOauthTokenUser = JSON.parse(localStorage.getItem('user'));
    if (authenticated.authorities.find(item => item.authority === 'Supervisor') !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  isUserAdministrator(): boolean {
    const authenticated: IOauthTokenUser = JSON.parse(localStorage.getItem('user'));
    if (authenticated.authorities.find(item => item.authority === 'Administrador') !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}

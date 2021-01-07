export interface IOauthLogin {
  userName: string;
  password: string;
}

export interface IUsuario {
  id: number;
  codigo: string;
  nombres: string;
  apellidos: string;
  dni: string;
  idregion: number;
  email: string;
  usuario: string;
}

export interface IOauthTokenAuthorities {
  id: number;
  name: string;
  authority: string;
}

export interface IOauthTokenUser {
  authorities: IOauthTokenAuthorities[];
  principal: IOauthUser;
}

export interface IOauthUser {
  id: number;
  username: string;
  password: string;
  accountExpired: boolean;
  accountLocked: boolean;
  credentialsExpired: boolean;
  enabled: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

export interface IOauthToken {
  userId: string;
  firstName: number;
  lastName: string;
  userName: string;
  token: string;
}

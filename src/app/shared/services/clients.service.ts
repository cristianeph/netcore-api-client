import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IClients} from '../interfaces/clients-interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) {
  }

  post(cliente: IClients): Observable<string> {
    return this.http.post<string>(`${environment.apiserver}/api/clientes`, cliente);
  }

  get(): Observable<IClients[]> {
    return this.http.get<IClients[]>(`${environment.apiserver}/api/clientes`);
  }
}

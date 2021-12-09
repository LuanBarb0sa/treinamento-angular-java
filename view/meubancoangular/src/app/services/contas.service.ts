import { IConta } from './../interfaces/contas';
import { HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISaqueDeposito } from '../interfaces/saque-deposito';

@Injectable({
  providedIn: 'root'
})
export class ContasService {
  api = `${environment.api}/contas/`;

  constructor(private http: HttpClient) { }

  listarTodasContas(){
    return this.http.get<IConta[]>(this.api);
  }
  saque(saque: ISaqueDeposito): Observable<any> {
    return this.http.post<IConta>(`${this.api}saque`, saque);
  }

}

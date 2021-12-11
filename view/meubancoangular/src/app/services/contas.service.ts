import { IConta } from './../interfaces/contas';
import { HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISaqueDeposito } from '../interfaces/saque-deposito';
import { ITransferencia } from '../interfaces/transferencia';

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

  deposito(deposito: ISaqueDeposito): Observable<any>{
    return this.http.post<IConta>(`${this.api}deposito`, deposito)
  }

  transferencia(transferencia : ITransferencia): Observable<any>{
    return this.http.post<IConta>(`${this.api}transferencia`, transferencia)
  }

  cadastrar(dados: IConta): Observable<any> {
    return this.http.post<IConta>(`${this.api}`, dados); //enviando valores para o back
  }
}

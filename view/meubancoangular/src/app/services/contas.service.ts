import { IConta } from './../interfaces/contas';
import { HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContasService {
  api = `${environment.api}/contas/`;

  constructor(private http: HttpClient) { }

  listarTodasContas(){
    return this.http.get<IConta[]>(this.api);
  }
}

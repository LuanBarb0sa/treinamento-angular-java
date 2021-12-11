import { ICliente } from './../interfaces/cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api = `${environment.api}/clientes/`;
  constructor(private http: HttpClient) { }

  listarTodosClientes(){
    return this.http.get<ICliente[]>(this.api);
  }

  deleteClient(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  postClient(body: ICliente): Observable<any>{
    return this.http.post(`${this.api}`, body);
  }

  getById(id: number): Observable<any>{
    return this.http.get(`${this.api}/${id}`);
  }

  putClient(id: number, body: ICliente): Observable<any>{
    return this.http.put(`${this.api}${id}`, body); 
  }

}

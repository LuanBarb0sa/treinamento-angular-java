import { ICliente } from './../interfaces/cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

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
    return this.http.delete(`${this.api}/${id}`)
  }
}

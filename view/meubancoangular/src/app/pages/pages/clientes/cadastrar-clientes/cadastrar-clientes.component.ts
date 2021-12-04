import { Component,  OnInit,  } from '@angular/core';
import { FormBuilder,  FormControl,  FormGroup,  Validators } from '@angular/forms';
import { Clientes } from '../clientes';


@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {
  clientes!: Clientes;
  
 

  constructor() {this.clientes= new Clientes()}

  ngOnInit():void {

  }
  onSubmit(): void { /* metodo onSubmit com alerta  para aparecer na pag*/
     alert(`nome: ${this.clientes.nome}\ncpf: ${this.clientes.cpf}\nemail: ${this.clientes.email}\nobs: ${this.clientes.obs}\nativo: ${this.clientes.ativo}`)
  }
    

}

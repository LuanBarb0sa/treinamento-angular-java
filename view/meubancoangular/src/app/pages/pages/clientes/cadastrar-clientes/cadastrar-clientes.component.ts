import { ClienteService } from './../../../../services/cliente.service';
import { Clientes } from './../clientes';
import { Component,  OnInit,  } from '@angular/core';
import { FormBuilder,  FormControl,  FormGroup,  Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {
  form!:FormGroup;

  constructor(private formb:FormBuilder) {
  }

  ngOnInit():void {
    this.createForm();
  }
  createForm():void {
    this.form = this.formb.group({
      nome: new FormControl(null,[Validators.required]),
      cpf: new FormControl (null,[Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      obs: new FormControl(null,[Validators.required, Validators.maxLength(30)]),
      ativo: new FormControl(null,[Validators.required]),
    })
  }

  onSubmit(): void {
    alert(`nome: ${this.form?.get('nome')?.value}\ncpf: ${this.form?.get('cpf')?.value}\nemail: ${this.form?.get('email')?.value}\nobs: ${this.form?.get('obs')?.value}\nativo: ${this.form?.get('ativo')?.value}`)
    //  Swal.fire({
    //   position: 'center',
    //   icon: 'success',
    //   title: `Cliente: ${this.form?.get('cpf')?.value}\nCadastrado com Sucesso`,
    //   showConfirmButton: false,
    //   timer: 1500
    // })

    this.form.reset();
  }


}




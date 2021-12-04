import { Component,  OnInit,  } from '@angular/core';
import { FormBuilder,  FormControl,  FormGroup,  Validators } from '@angular/forms';

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
      cpf: new FormControl (null,[Validators.required, Validators.maxLength(14), Validators.minLength(14)]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      obs: new FormControl(null,[Validators.required, Validators.maxLength(30)]),
      ativo: new FormControl(null,[Validators.required]),
    })
  }

  onSubmit(): void { 
     alert(`nome: ${this.form?.get('nome')?.value}\ncpf: ${this.form?.get('cpf')?.value}\nemail: ${this.form?.get('email')?.value}\nobs: ${this.form?.get('obs')?.value}\nativo: ${this.form?.get('ativo')?.value}`)

  }
    

}

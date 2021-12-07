import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Clientes } from './../clientes';
import { Component,  OnInit,  } from '@angular/core';
import { FormBuilder,  FormControl,  FormGroup,  Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ICliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {
  form!:FormGroup;
  id!: number;

  constructor(private formb:FormBuilder, private clienteService: ClienteService, private router: ActivatedRoute) {
  }

  ngOnInit():void {
    this.createForm();
    this.id = Number(this.router.snapshot.params['id']);
    if (this.id) {
      this.getById();
    }
  }

  createForm(data?: ICliente):void {
    this.form = this.formb.group({
      nome: new FormControl(data ? data.nome : null,[Validators.required]),
      cpf: new FormControl (data ? data.cpf : null ,[Validators.required]),
      email: new FormControl(data ? data.email : null ,[Validators.required, Validators.email]),
      observacoes: new FormControl(data ? data.observacoes : null ,[Validators.required, Validators.maxLength(30)]),
      ativo: new FormControl(data ? data.ativo : null ,[Validators.required]),
    })
  }

  /**
   *Cadastrar clientes
   */
  onSubmit(): void {
    this.clienteService.postClient(this.form.value)
    .subscribe(
      (res) => {
        alert('Deu certo');
        this.form.reset();
      },
      (erro) => {
        alert('Erro');
    });
  }

  getById(){
    this.clienteService.getById(this.id).subscribe(
      (res) => {
        this.createForm(res);
      },
      (erro) => {
        alert('Erro');
      }
    )
  }
}




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
  show:boolean = true;
  $sources!:ICliente;

  constructor(private formb:FormBuilder, private clienteService: ClienteService, private router: ActivatedRoute, private rout: Router) {
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
      id: new FormControl(data ? data.id : null ),
    })
  }

  /**
   *Cadastrar clientes
   */
  onSubmit(): void {
    this.id ? this.update() : this.adicionar();
  }

  adicionar(): void {
    this.clienteService.postClient(this.form.value)
    .subscribe(
      (res) => {
        Swal.fire('Ótimo!',
      'Cliente Cadastrado com sucesso',
      'success');
      this.rout.navigate(['/clientes']);
      },
      (erro) => {
        Swal.fire('Opa!',
      'Revise os seus dados',
      'error');
    });
  }

  update(): void {
    this.clienteService.putClient(this.id, this.form.value)
    .subscribe(
      (res) => {
        Swal.fire('Ótimo!',
      'Cliente Cadastrado com sucesso',
      'success');
        this.form.reset();
      },
      (erro) => {
        Swal.fire('Opa!',
      'Revise os seus dados',
      'error');
    });
  }

  getById(){
    this.clienteService.getById(this.id).subscribe(
      (res) => {
        this.createForm(res);
        this.$sources=res;
      },
      (erro) => {
        alert('Erro');
      }
    )
  }
}




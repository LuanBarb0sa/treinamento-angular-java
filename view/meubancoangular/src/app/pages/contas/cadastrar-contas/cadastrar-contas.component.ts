import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { IConta } from 'src/app/interfaces/contas';
import { ClienteService } from 'src/app/services/cliente.service';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-contas',
  templateUrl: './cadastrar-contas.component.html',
  styleUrls: ['./cadastrar-contas.component.css']
})
export class CadastrarContasComponent implements OnInit {
  form!:FormGroup;
  @Input() dataSource!: ICliente;

  constructor(private formb:FormBuilder, private clienteService: ClienteService, private router: ActivatedRoute, private contasService: ContasService ) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.dataSource)
    }

  createForm():void {
    this.form = this.formb.group({
      agencia: new FormControl(null ,[Validators.required]),
      saldo: new FormControl(null ,[Validators.required]),
      numero: new FormControl(null ,[Validators.required]),
    })
  }

  mountPayLoad(): IConta {
    const data = this.form.value
    console.log(data)
    const PayLoad: IConta = {
      agencia: data.agencia,
      saldo: data.saldo,
      numero: data.numero,
      cliente: this.dataSource
    } 
    return PayLoad;
  }

  save(): void {
    this.contasService.cadastrar(this.mountPayLoad()).subscribe( 
      (res) => {
        Swal.fire('Ótimo!',
      'Conta Cadastrada com sucesso',
      'success');
        this.form.reset();
      },
      (error) => {
        Swal.fire('Opa!',
      'Revise os seus dados',
      'error');
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITransferencia } from 'src/app/interfaces/transferencia';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  form!:FormGroup;

  constructor(private formb:FormBuilder, private router: Router, private contaService: ContasService) { }

  ngOnInit(): void {
    this.creatForm();
  }
  
  creatForm() :void {
    this.form = this.formb.group({
      agenciaOrigem : new FormControl (null,[Validators.required]),
      numeroContaOrigem : new FormControl (null,[Validators.required]),
      agenciaDestino : new FormControl (null,[Validators.required]),
      numeroContaDestino : new FormControl (null,[Validators.required]),
      valor : new FormControl (null,[Validators.required])

    })
  }
  
  onSubmit(): void {
    console.log(this.form.value)

    this.form.reset();
  }

  transferir(){
    const transferir: ITransferencia = this.form.value;
    this.contaService.transferencia(transferir).subscribe(result =>{
      Swal.fire('Ótimo!',
      'Tranferência realizado com sucesso',
      'success');
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire('Ish!',
      'Houve algum erro ao tentar transferir, tente novamente',
      'error');
    });

  }
}

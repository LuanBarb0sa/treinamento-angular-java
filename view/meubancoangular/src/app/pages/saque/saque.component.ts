import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  form!:FormGroup;

  constructor(private formb:FormBuilder, private router: Router, private contaService: ContasService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() :void {
    this.form = this.formb.group({
      agencia: new FormControl(null,[Validators.required, Validators.maxLength(4)]),
      numeroConta: new FormControl (null,[Validators.required]),
      valor: new FormControl(null,[Validators.required])
    })
  }

  onSubmit(): void { 
    console.log(this.form.value)

    this.form.reset();
  }
  sacar(){
    const numeroConta: ISaqueDeposito = this.form.value;
    this.contaService.saque(numeroConta).subscribe(result =>{
      Swal.fire('Ótimo!',
      'Saque realizado com sucesso',
      'success');
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire('Ish!',
      'Houve algum erro ao tentar sacar, tente novamente',
      'error');
    });
  }

  
}

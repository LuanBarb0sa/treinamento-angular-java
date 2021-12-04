import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  form!:FormGroup;

  constructor(private formb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() :void {
    this.form = this.formb.group({
      agencia: new FormControl(null,[Validators.required, Validators.maxLength(4)]),
      conta: new FormControl (null,[Validators.required]),
      valor: new FormControl(null,[Validators.required])
    })
  }

  onSubmit(): void { 
    // alert(`agencia: ${this.form?.get('agencia')?.value}\nconta: ${this.form?.get('conta')?.value}\nvalor: ${this.form?.get('valor')?.value}`)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Depósito confirmado',
      showConfirmButton: false,
      timer: 1500
    })

    this.form.reset();

 }
   

}
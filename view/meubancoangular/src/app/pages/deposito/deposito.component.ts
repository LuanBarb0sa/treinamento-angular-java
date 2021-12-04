import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      agencia: new FormControl(null,[Validators.required]),
      conta: new FormControl (null,[Validators.required]),
      valor: new FormControl(null,[Validators.required])
    })
  }

  onSubmit(): void { 
    alert(`agencia: ${this.form?.get('agencia')?.value}\nconta: ${this.form?.get('conta')?.value}\nvalor: ${this.form?.get('valor')?.value}`)

 }
   

}
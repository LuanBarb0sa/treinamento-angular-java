import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
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

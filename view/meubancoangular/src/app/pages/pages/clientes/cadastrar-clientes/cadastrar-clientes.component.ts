import { Component,  OnInit,  } from '@angular/core';
import { FormBuilder,  FormControl,  FormGroup,  Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

 


  botaoClicado(){
    alert('Amegannnn')
  }

  constructor(private form: FormBuilder) { }

  ngOnInit() {



    }

    criar(){

    }

}

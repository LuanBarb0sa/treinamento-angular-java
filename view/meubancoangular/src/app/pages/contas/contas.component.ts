import { Component, OnInit } from '@angular/core';
import { IConta } from 'src/app/interfaces/contas';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  contas: IConta[] = [];

  constructor(private contasService: ContasService) { }

  ngOnInit(): void {
    this.listarTodasContas();
  }

  listarTodasContas(){
    this.contasService.listarTodasContas().subscribe( contasApi => {
      this.contas = contasApi;
      })


  }
}

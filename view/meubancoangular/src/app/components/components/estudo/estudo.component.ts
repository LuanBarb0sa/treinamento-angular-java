import { Component, Input, OnInit, } from '@angular/core';


@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {

  @Input() exibindo: string = '';
  @Input() exibirTextoAlerta: string = '';



  constructor() { }

  ngOnInit(): void {
  }

}

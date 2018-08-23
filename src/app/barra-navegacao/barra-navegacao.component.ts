import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  constructor() { }
  


  @Output() acao =  new EventEmitter<any>();


  ngOnInit() {
  }


 /**
   * Muda a tela visível.
   * @param nome O nome da nova tela (que deve se tornar visível)
   */
   
  irPara(nome) {
    this.acao.emit(nome)
    }
  
}

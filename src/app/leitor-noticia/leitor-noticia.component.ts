import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-leitor-noticia',
  templateUrl: './leitor-noticia.component.html',
  styleUrls: ['./leitor-noticia.component.css']
})
export class LeitorNoticiaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() leituraNoticia;

  @Output() fecharNoticia = new EventEmitter<any>();

  fechar(){
    this.fecharNoticia.emit(null);

  }
}

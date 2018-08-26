import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-cadastrar-editar-noticia',
  templateUrl: './cadastrar-editar-noticia.component.html',
  styleUrls: ['./cadastrar-editar-noticia.component.css']
})
export class CadastrarEditarNoticiaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() formulario = new EventEmitter<Form>();

  salvar(form){
    this.formulario.emit(form)
  }
}

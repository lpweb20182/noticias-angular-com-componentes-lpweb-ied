import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Noticia } from './../noticia.model';

@Component({
  selector: 'app-todas-noticias',
  templateUrl: './todas-noticias.component.html',
  styleUrls: ['./todas-noticias.component.css']
})
export class TodasNoticiasComponent implements OnInit {

  constructor() { }
 
    /**
   * Atributo utilizado para controlar a pesquisa da lista de notícias
   */
  listaPesquisa = null;
  
  ngOnInit() {
  }

  @Input() listaNoticias

  @Output()
  editarNoticia = new EventEmitter<Noticia>();

  @Output()
  excluirNoticia = new EventEmitter<Noticia>();

  editar(noticia){
    this.editarNoticia.emit(noticia);
  }

  excluir(noticia){
    this.excluirNoticia.emit(noticia)
  }

    /**
   * Encontra e retorna as notícias para a lista conforme o campo 
   * de pesquisa [`listaPesquisa`]{@link AppComponent#listaPesquisa}
   * considerando que seu valor está presente no título, conteúdo ou 
   * nome do autor.
   * 
   * @returns A lista de notícias para apresentar
   */
  noticiasParaLista() {
    if (this.listaPesquisa) {
      return this.listaNoticias.filter(n =>
        n.titulo.indexOf(this.listaPesquisa) !== -1
        || n.conteudo.indexOf(this.listaPesquisa) !== -1
        || n.autor.indexOf(this.listaPesquisa) !== -1
      );
    } else {
      return this.listaNoticias;
    }
  }
}

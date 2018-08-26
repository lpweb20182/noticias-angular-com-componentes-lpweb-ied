import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

import { Noticia } from './../noticia.model';


@Component({
  selector: 'app-noticias-recentes',
  templateUrl: './noticias-recentes.component.html',
  styleUrls: ['./noticias-recentes.component.css']
})
export class NoticiasRecentesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() noticias;

  @Output ()
   mostrou = new EventEmitter <Noticia>();


  mostrar(noticia) {
    this.mostrou.emit(noticia);
  }




  
  
}

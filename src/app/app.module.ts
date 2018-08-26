import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { LeitorNoticiaComponent } from './leitor-noticia/leitor-noticia.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { TodasNoticiasComponent } from './todas-noticias/todas-noticias.component';
import { CadastrarEditarNoticiaComponent } from './cadastrar-editar-noticia/cadastrar-editar-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    LeitorNoticiaComponent,
    NoticiasRecentesComponent,
    TodasNoticiasComponent,
    CadastrarEditarNoticiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

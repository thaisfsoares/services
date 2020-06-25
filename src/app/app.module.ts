import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from './cursos/cursos.module';
import { LogService } from './log.service'

@NgModule({
  declarations: [
    AppComponent     
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [LogService],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

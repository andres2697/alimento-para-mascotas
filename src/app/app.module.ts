import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CintaComponent } from './components/cinta/cinta.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { AnimalesComponent } from './components/animales/animales.component';

@NgModule({
  declarations: [
    AppComponent,
    CintaComponent,
    SeccionesComponent,
    CarruselComponent,
    AnimalesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

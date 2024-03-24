import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { FormularioMaldjComponent } from './components/formulario-maldj/formulario-maldj.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NavbarMaldjComponent } from './components/navbar-maldj/navbar-maldj.component';
import { SpinnerMaldjComponent } from './shared/spinner-maldj/spinner-maldj.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioMaldjComponent,
    ListadoNoticiasComponent,
    NavbarMaldjComponent,
    SpinnerMaldjComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

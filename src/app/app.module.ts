import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//forms module importado en los imports
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//Pipe
import { FilterCasa } from './pipes/filter.casa';

// Importar Componentes
import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';
// Importar Servicios
import { ServiciosService } from './provaiders/servicios.service';
import { TodosService } from './provaiders/todos.service';
import {CasaService}from './provaiders/casa.service';
// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { CasaComponent } from './casa/casa.component';
import { DetalleCasaComponent } from './casa/detalle-casa/detalle-casa.component';



@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    CasaComponent,
    DetalleCasaComponent,
    FilterCasa

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    ServiciosService,
    TodosService,
    CasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

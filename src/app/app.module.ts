import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { Http, Response, Headers, HttpModule } from '@angular/http';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoEmpleadoComponent } from './empleados/nuevo-empleado/nuevo-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    NuevoEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

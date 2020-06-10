
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Empleado } from '../_models/empleado';



@Injectable()
export class EmpleadoService {
    API_URL: string;
    // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

    constructor(private http: HttpClient) {
        this.API_URL = environment.api + 'empleados';;
    }


    getEmpleados() {
        return this.http.get(this.API_URL);
    }

    postEmpleados(empleado): Observable<Empleado> {
       
        return this.http.post<Empleado>(this.API_URL, JSON.stringify(empleado))
        .pipe(
            retry(1)
        );
    }
}
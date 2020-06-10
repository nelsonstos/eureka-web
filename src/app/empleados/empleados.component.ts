import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmpleadoService } from '../_services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers:[EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  public empleados = [];

  constructor( private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.listaEmpleados()
  }

  listaEmpleados() {
    this.empleadoService.getEmpleados().subscribe(resp => {
      this.empleados = Object.values(resp);
      console.log(this.empleados)
    })
  }

  nuevoEmpleado() {
    this.router.navigate(['empleados/nuevo-empleado'])
  }

}

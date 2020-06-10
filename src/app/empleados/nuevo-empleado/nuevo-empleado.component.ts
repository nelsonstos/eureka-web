import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import { EmpleadoService } from '../../_services/empleado.service';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css'],
  providers: [EmpleadoService]
})
export class NuevoEmpleadoComponent implements OnInit {

  empleadoForm: FormGroup;

  constructor(
    private empleadoService:EmpleadoService,
    private router:Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.empleadoForm = this.formBuilder.group({
      nombre:['', Validators.required],
      apellidos:['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      afp:  ['', Validators.required],
      cargo: ['', Validators.required],
      sueldo: ['', Validators.required],
    })
  }

  crearEmpleado() {
   let empleado = {
     nombre: this.empleadoForm.controls.nombre.value,
     apellidos: this.empleadoForm.controls.apellidos.value,
     fecha_nacimiento: this.empleadoForm.controls.fecha_nacimiento.value,
     fecha_ingreso: this.empleadoForm.controls.fecha_ingreso.value,
     afp: this.empleadoForm.controls.afp.value,
     cargo: this.empleadoForm.controls.cargo.value,
     sueldo:this.empleadoForm.controls.sueldo.value
   }
   console.log(empleado)
   this.empleadoService.postEmpleados(empleado)
   .subscribe(resp => {
     this.router.navigate(['empleados'])
   }, error=> {
     console.log("Error en el registro de empleados")
   })
  }

}

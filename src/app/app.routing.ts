import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoEmpleadoComponent } from './empleados/nuevo-empleado/nuevo-empleado.component';

const routes: Routes = [
  
  { 
  	path: 'empleados', 
    component: EmpleadosComponent,
  },
   { 
  	path: 'empleados/nuevo-empleado', 
    component: NuevoEmpleadoComponent,
  },
  { path : '', 
  	component : EmpleadosComponent
  }
];

export const routing = RouterModule.forRoot(routes);
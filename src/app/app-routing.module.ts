import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { PasantiasComponent } from './pages/pasantias/pasantias.component';
import { PracticasComponent } from './pages/practicas/practicas.component';
import { TestpComponent } from './pages/testp/testp.component';

import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },

  { path: 'inicio', component: InicioComponent },
  { path: 'pasantias', component: PasantiasComponent },
  { path: 'practicas', component: PracticasComponent },

  { path: 'testp', component:TestpComponent},

  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-productos', component: CrearProductosComponent },
  { path: 'editar-producto/:id', component: EditarProductosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

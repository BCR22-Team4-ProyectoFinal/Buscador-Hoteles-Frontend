import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhotelesAdminComponent } from './components/admin/addhoteles-admin/addhoteles-admin.component';
import { HotelesAdminComponent } from './components/admin/hoteles-admin/hoteles-admin.component';
import { IndexAdminComponent } from './components/admin/index-admin/index-admin.component';
import { InfoHotelesComponent } from './components/admin/info-hoteles/info-hoteles.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { AddreservaUserComponent } from './components/users/addreserva-user/addreserva-user.component';

import { BuscadorMapaComponent } from './components/public/buscador-mapa/buscador-mapa.component';
import { HabitacionesAdminComponent } from './components/admin/habitaciones-admin/habitaciones-admin.component';
import { InfoHabitacionesAdminComponent } from './components/admin/info-habitaciones-admin/info-habitaciones-admin.component';
import { AddHabitacionesAdminComponent } from './components/admin/add-habitaciones-admin/add-habitaciones-admin.component';
import { PoblacionesAdminComponent } from './components/admin/poblaciones-admin/poblaciones-admin.component';
import { InfoPoblacionesAdminComponent } from './components/admin/info-poblaciones-admin/info-poblaciones-admin.component';
import { AddPoblacionesAdminComponent } from './components/admin/add-poblaciones-admin/add-poblaciones-admin.component';
import { ReservasAdminComponent } from './components/admin/reservas-admin/reservas-admin.component';
import { InfoReservasAdminComponent } from './components/admin/info-reservas-admin/info-reservas-admin.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { InfoUsuariosComponent } from './components/admin/info-usuarios/info-usuarios.component';
import { AccountComponent } from './components/users/account/account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'buscador',
    component: BuscadorMapaComponent
  },
  {
    path: 'admin',
    component: IndexAdminComponent
  },
  {
    path: 'admin/hoteles/addHotel',
    component: AddhotelesAdminComponent
  },
  {
    path: 'admin/habitaciones/addHabitacion',
    component: AddHabitacionesAdminComponent
  },
  {
    path: 'admin/poblaciones/addPoblacion',
    component: AddPoblacionesAdminComponent
  },
  {
    path: 'admin/hoteles',
    component: HotelesAdminComponent
  },
  {
    path: 'admin/habitaciones',
    component: HabitacionesAdminComponent
  },
  {
    path: 'admin/poblaciones',
    component: PoblacionesAdminComponent
  },
  {
    path: 'admin/reservas',
    component: ReservasAdminComponent
  },
  {
    path: 'admin/usuarios',
    component: UsuariosComponent
  },
  {
    path: 'reserva',
    component: AddreservaUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/hoteles/:id',
    component: InfoHotelesComponent
  },
  {
    path: 'admin/habitaciones/:id',
    component: InfoHabitacionesAdminComponent
  },
  {
    path: 'admin/poblaciones/:id',
    component: InfoPoblacionesAdminComponent
  },
  {
    path: 'admin/reservas/:id',
    component: InfoReservasAdminComponent
  },
  {
    path: 'admin/usuarios/:id',
    component: InfoUsuariosComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: AccountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

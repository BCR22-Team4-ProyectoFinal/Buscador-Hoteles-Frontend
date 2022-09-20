import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhotelesAdminComponent } from './components/admin/addhoteles-admin/addhoteles-admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HotelesAdminComponent } from './components/admin/hoteles-admin/hoteles-admin.component';
import { IndexAdminComponent } from './components/admin/index-admin/index-admin.component';
import { LoginComponent } from './components/public/login/login.component';
import { AddreservaUserComponent } from './components/users/addreserva-user/addreserva-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: IndexAdminComponent
  },
  {
    path:'admin/dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin/addHotel',
    component: AddhotelesAdminComponent
  },
  {
    path:'admin/hoteles',
    component: HotelesAdminComponent
  },
  {
    path: 'reserva',
    component: AddreservaUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

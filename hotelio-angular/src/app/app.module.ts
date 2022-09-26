import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexAdminComponent } from './components/admin/index-admin/index-admin.component';
import { HotelesAdminComponent } from './components/admin/hoteles-admin/hoteles-admin.component';
import { AddhotelesAdminComponent } from './components/admin/addhoteles-admin/addhoteles-admin.component';
import { HomeComponent } from './components/public/home/home.component';
import { AddreservaUserComponent } from './components/users/addreserva-user/addreserva-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfoHotelesComponent } from './components/admin/info-hoteles/info-hoteles.component';
import { LoginComponent } from './components/public/login/login.component';
import { AuthInterceptor } from './_helper/auth.interceptor';
import { ReservasAdminComponent } from './components/admin/reservas-admin/reservas-admin.component';
import { InfoReservasAdminComponent } from './components/admin/info-reservas-admin/info-reservas-admin.component';
import { HabitacionesAdminComponent } from './components/admin/habitaciones-admin/habitaciones-admin.component';
import { AddHabitacionesAdminComponent } from './components/admin/add-habitaciones-admin/add-habitaciones-admin.component';
import { InfoHabitacionesAdminComponent } from './components/admin/info-habitaciones-admin/info-habitaciones-admin.component';
import { PoblacionesAdminComponent } from './components/admin/poblaciones-admin/poblaciones-admin.component';
import { AddPoblacionesAdminComponent } from './components/admin/add-poblaciones-admin/add-poblaciones-admin.component';
import { InfoPoblacionesAdminComponent } from './components/admin/info-poblaciones-admin/info-poblaciones-admin.component';
import { AccountComponent } from './components/users/account/account.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { InfoUsuariosComponent } from './components/admin/info-usuarios/info-usuarios.component';
import { BuscadorItemComponent } from './components/public/buscador-item/buscador-item.component';
import { BuscadorMapaComponent } from './components/public/buscador-mapa/buscador-mapa.component';
import { EditProfileComponent } from './components/users/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexAdminComponent,
    HotelesAdminComponent,
    AddhotelesAdminComponent,
    HomeComponent,
    AddreservaUserComponent,
    InfoHotelesComponent,
    LoginComponent,
    ReservasAdminComponent,
    InfoReservasAdminComponent,
    HabitacionesAdminComponent,
    AddHabitacionesAdminComponent,
    InfoHabitacionesAdminComponent,
    PoblacionesAdminComponent,
    AddPoblacionesAdminComponent,
    InfoPoblacionesAdminComponent,
    AccountComponent,
    UsuariosComponent,
    InfoUsuariosComponent,
    BuscadorItemComponent,
    BuscadorMapaComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

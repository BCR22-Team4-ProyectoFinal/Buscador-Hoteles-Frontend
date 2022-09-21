import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexAdminComponent } from './components/admin/index-admin/index-admin.component';
import { HotelesAdminComponent } from './components/admin/hoteles-admin/hoteles-admin.component';
import { AddhotelesAdminComponent } from './components/admin/addhoteles-admin/addhoteles-admin.component';
import { HomeComponent } from './components/public/home/home.component';
import { AddreservaUserComponent } from './components/users/addreserva-user/addreserva-user.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfoHotelesComponent } from './components/admin/info-hoteles/info-hoteles.component';
import { LoginComponent } from './components/public/login/login.component';
import { AuthInterceptor } from './_helper/auth.interceptor';
import { AccountComponent } from './components/users/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexAdminComponent,
    HotelesAdminComponent,
    AddhotelesAdminComponent,
    HomeComponent,
    AddreservaUserComponent,
    DashboardComponent,
    InfoHotelesComponent,
    LoginComponent,
    AccountComponent
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexAdminComponent } from './components/admin/index-admin/index-admin.component';
import { HotelesAdminComponent } from './components/admin/hoteles-admin/hoteles-admin.component';
import { AddhotelesAdminComponent } from './components/admin/addhoteles-admin/addhoteles-admin.component';
import { HomeComponent } from './components/public/home/home.component';
import { AddreservaUserComponent } from './components/users/addreserva-user/addreserva-user.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexAdminComponent,
    HotelesAdminComponent,
    AddhotelesAdminComponent,
    HomeComponent,
    AddreservaUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

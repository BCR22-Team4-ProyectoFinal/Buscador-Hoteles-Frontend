import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { PoblacionesService } from 'src/app/services/poblaciones.service';
import { ReservasService } from 'src/app/services/reservas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-index-admin',
  templateUrl: './index-admin.component.html',
  styleUrls: ['./index-admin.component.css']
})
export class IndexAdminComponent implements OnInit {

  hoteles:any[]=[];
  usuarios:any[]=[];
  poblaciones:any[]=[];
  reservas:any[]=[];

  rol:any;
  constructor(private tokenStorageService:TokenStorageService,private hotelService:HotelesService,private reservasService:ReservasService,private usuariosService:UsuariosService,private poblacionesService:PoblacionesService) { }

  ngOnInit(): void {
    this.hotelService.getAll().subscribe(
      data => {
        this.hoteles = data;
      }
    )
    this.reservasService.getAll().subscribe(
      data => {
        this.reservas = data;
      }
    )
    this.usuariosService.getAll().subscribe(
      data => {
        this.usuarios = data;
      }
    )
    this.poblacionesService.getAll().subscribe(
      data => {
        this.poblaciones = data;
      }
    )
    this.rol = this.tokenStorageService.getRoles();
  }

}

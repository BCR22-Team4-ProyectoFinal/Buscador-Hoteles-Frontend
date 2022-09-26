import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user:any;
  username:any;
  fecha:any;
  constructor(private tokenStorageService: TokenStorageService, private userService:UsuariosService) { }

  ngOnInit(): void {
    this.username = this.tokenStorageService.getUser();
    this.loadUser();
  }
  loadUser(){
    this.userService.getByUsername(this.username).subscribe(
      data => {
        console.log(data);
        this.user = data;
        this.fecha = data["fechaNacimiento"].split('T');
      }
    )
  }

  guardar(){
    let headers = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.user.fechaNacimiento = this.fecha[0];
    this.userService.update(this.user.id,this.user,headers).subscribe();
  }
}

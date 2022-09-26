import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  fechaCompleta:any;
  constructor(private tokenStorageService: TokenStorageService, private userService:UsuariosService,private router:Router) { }

  ngOnInit(): void {
    this.username = this.tokenStorageService.getUser();
    this.loadUser();
  }
  loadUser(){
    this.userService.getByUsername(this.username).subscribe(
      data => {
        console.log(data);
        this.user = data;
        this.fechaCompleta = data["fechaNacimiento"].split('T');
        this.fecha = this.fechaCompleta[0];
      }
    )
  }

  guardar(){
    let headers = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.user.fechaNacimiento = this.fecha;
    this.userService.update(this.user.id,this.user,headers).subscribe();

    setTimeout(() => {
      this.router.navigate(['/', 'profile']);
    }, 2000);
  }
}

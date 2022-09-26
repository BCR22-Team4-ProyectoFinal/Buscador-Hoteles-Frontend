import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  rol:any;
  url:any;
  username :any;
  user:any;
  constructor(private tokenStorageService: TokenStorageService,private router:Router, private userService:UsuariosService) { }

  ngOnInit(): void {
    this.rol =this.tokenStorageService.getRoles();
    this.username = this.tokenStorageService.getUser();
    this.route();
    this.loadUser();
  }

  route(){
    if (this.rol == "ADMIN") {
      this.url = '/admin';
    }
    else
    {
      this.url = '/home';
    }
  }

  loadUser(){
    this.userService.getByUsername(this.username).subscribe(
      data => {
        console.log(data);
        this.user = data;
      }
    )
  }

}

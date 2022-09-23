import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROL_KEY = 'auth-rol';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  constructor(private usuarioService: UsuariosService,private router:Router) { }

  signOut(): void{
    window.sessionStorage.clear();
  }

  public saveToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken():string|null{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user:any):void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(user));
    this.setRoles(user)
  }

  public getUser():any{
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public setRoles(user:any) {
    this.usuarioService.getByUsername(user).subscribe(
      data =>{
        console.log(data["rol"])
        window.sessionStorage.removeItem(ROL_KEY);
        window.sessionStorage.setItem(ROL_KEY,data["rol"])
      }
    )


  }

  public getRoles() {
    return window.sessionStorage.getItem(ROL_KEY);
  }
}

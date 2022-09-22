import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'https://app-mysql-database.herokuapp.com/api/usuarios'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  getByUsername(username:any):Observable<any>{
    return this.http.get(`${apiUrl}/username/${username}`);
  }
}

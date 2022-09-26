import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'https://app-mysql-database.herokuapp.com/api/usuarios';
const headers = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(apiUrl);
  }

  get(id:any):Observable<any>{
    return this.http.get(`${apiUrl}/${id}`);
  }

  create(datos:any): Observable<any>{
    return this.http.post(apiUrl,datos);
  }

  update(id:any,datos:any):Observable<any>{
    return this.http.put(`${apiUrl}/${id}`,JSON.stringify(datos),headers);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${apiUrl}/${id}`);
  }

  getByUsername(username:any):Observable<any>{
    return this.http.get(`${apiUrl}/username/${username}`);
  }
}

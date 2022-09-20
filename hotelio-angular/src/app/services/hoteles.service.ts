import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'https://app-mysql-database.herokuapp.com/api/hoteles'

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

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
    return this.http.put(`${apiUrl}/${id}`,datos);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${apiUrl}/${id}`);
  }
}

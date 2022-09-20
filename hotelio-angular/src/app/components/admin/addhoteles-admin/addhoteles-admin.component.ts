import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addhoteles-admin',
  templateUrl: './addhoteles-admin.component.html',
  styleUrls: ['./addhoteles-admin.component.css']
})
export class AddhotelesAdminComponent implements OnInit {

  guardado:boolean=false;
  hotel:any = {
    nombre:'',
    categoria:'',
    poblacion:'',
    longitud:'',
    latitud:''
  }
  poblaciones:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

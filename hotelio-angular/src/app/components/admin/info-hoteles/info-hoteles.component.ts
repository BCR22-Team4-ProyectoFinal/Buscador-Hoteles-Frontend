import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-hoteles',
  templateUrl: './info-hoteles.component.html',
  styleUrls: ['./info-hoteles.component.css']
})
export class InfoHotelesComponent implements OnInit {

  hotel:any = {
    nombre:'',
    categoria:'',
    poblacion:'',
    longitud:'',
    latitud:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}

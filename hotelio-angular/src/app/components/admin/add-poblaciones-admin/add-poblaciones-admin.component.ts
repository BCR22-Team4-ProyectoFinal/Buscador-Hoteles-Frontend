import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoblacionesService } from 'src/app/services/poblaciones.service';

@Component({
  selector: 'app-add-poblaciones-admin',
  templateUrl: './add-poblaciones-admin.component.html',
  styleUrls: ['./add-poblaciones-admin.component.css']
})
export class AddPoblacionesAdminComponent implements OnInit {
  guardado:boolean=false;
  poblacion:any = {
    nombre:'',
    cp: ''
  }
  constructor(private poblacionesService:PoblacionesService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.poblacionesService.create(this.poblacion).subscribe(
      data =>{
        this.guardado = true;
      }
    );
  }

  newPoblacion(){
    this.guardado = false;
    this.poblacion = {
      nombre:'',
      cp: ''
    }
  }

}
